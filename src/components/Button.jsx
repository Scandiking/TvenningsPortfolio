import React from 'react';

function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}

export default Button;
