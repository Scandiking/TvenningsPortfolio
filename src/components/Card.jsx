import React from 'react';

function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-500 mb-3">{title}</h2>
      <p className="text-gray-600 dark:text-gray-500">{description}</p>
    </div>
  );
}

export default Card;
