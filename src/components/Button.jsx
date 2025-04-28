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

  // Variants
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    dark: 'bg-gray-400 hover:bg-gray-900 text-white',
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
          className={`relative overflow-hidden font-semibold rounded transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
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