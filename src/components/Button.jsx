import React, { useState, useEffect } from 'react';

function Button({ children, onClick, className = ' ', variant = 'primary', size = 'md' }) {
  const [rippleArray, setRippleArray] = useState([]);

  // Remove ripple effect after animation completes
  useEffect(() => {
    let bounce = null;
    if (rippleArray.length > 0) {
      bounce = setTimeout(() => {
        setRippleArray([]);
      }, 600); // Match this to the animation duration
    }

    return () => clearTimeout(bounce);
  }, [rippleArray.length]);

  // Handle ripple effect
  const addRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRippleArray([...rippleArray, ripple]);
  };

  const variants = {
    primary:   'bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white',
    secondary: 'border border-brand-500 text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900 bg-transparent',
    ghost:     'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 bg-transparent',
    success:   'bg-[#2a9d5c] hover:bg-[#228a4e] text-white',
    danger:    'bg-[#cc3344] hover:bg-[#b02a38] text-white',
    warning:   'bg-[#e8901a] hover:bg-[#d07d12] text-white',
    info:      'bg-fjord-500 hover:bg-fjord-700 text-white',
    light:     'bg-neutral-100 hover:bg-neutral-200 text-neutral-900',
    dark:      'bg-neutral-800 hover:bg-neutral-900 text-white',
  };

  // Sizes
  const sizes = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // Handle click with ripple
  const handleClick = (event) => {
    addRipple(event);
    if (onClick) onClick(event);
  };

  return (
      <button
          onClick={handleClick}
          className={`relative overflow-hidden font-body font-semibold rounded-md transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {/* Ripple effects */}
        {rippleArray.map(ripple => (
            <span
                key={ripple.id}
                className="absolute rounded-full bg-white/30 animate-ripple"
                style={{
                  top: ripple.y + 'px',
                  left: ripple.x + 'px',
                  width: ripple.size + 'px',
                  height: ripple.size + 'px',
                }}
            />
        ))}
        {/* Button content */}
        <span className="relative z-10">{children}</span>
      </button>
  );
}

export default Button;