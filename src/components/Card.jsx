import React from 'react';

function Card({ title, description }) {
    return (
        <div className="bg-content1 rounded-lg shadow-md p-6 border-t-2 border-primary h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2> {/* ENDRET: text-gray-800 dark:text-gray-500 → text-foreground */}
            <p className="text-default-500">{description}</p> {/* ENDRET: text-gray-600 dark:text-gray-500 → text-default-500 */}
        </div>
    );
}

export default Card;
