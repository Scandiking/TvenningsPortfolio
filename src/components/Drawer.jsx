import React, { useEffect } from 'react';

const Drawer = ({
                    isOpen,
                    onClose,
                    children,
                    position = 'left',
                    width = 'w-64',
                    overlayColor = 'bg-black/50'
                }) => {
    // Determine position classes
    const positionClasses = {
        left: 'left-0 transform -translate-x-full',
        right: 'right-0 transform translate-x-full',
        top: 'top-0 transform -translate-y-full',
        bottom: 'bottom-0 transform translate-y-full'
    };

    // Handle ESC key press to close drawer
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    // Prevent body scrolling when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Determine if drawer is horizontal or vertical
    const isHorizontal = position === 'left' || position === 'right';

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${overlayColor} ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* Drawer */}
            <div
                className={`fixed z-60 ${isHorizontal ? 'h-full' : 'w-full'} ${width} 
          ${positionClasses[position]} ${isOpen ? 'translate-x-0 translate-y-0' : ''} 
          bg-white shadow-xl transition-transform duration-300 ease-in-out`}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                    aria-label="Close drawer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Drawer content */}
                <div className="p-6 overflow-y-auto h-full">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Drawer;
