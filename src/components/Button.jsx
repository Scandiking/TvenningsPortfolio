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
    primary:   'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white',
    secondary: 'border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 bg-transparent',
    ghost:     'text-default-700 dark:text-default-200 hover:bg-default-100 dark:hover:bg-default-800 bg-transparent',
    success:   'bg-success-500 hover:bg-success-600 text-white',
    danger:    'bg-danger-500 hover:bg-danger-600 text-white',
    warning:   'bg-warning-500 hover:bg-warning-600 text-white',
    info:      'bg-secondary-500 hover:bg-secondary-700 text-white',
    light:     'bg-default-100 hover:bg-default-200 text-default-900',
    dark:      'bg-default-800 hover:bg-default-900 text-white',
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
          className={`relative overflow-hidden font-medium rounded-full transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
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