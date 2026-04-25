import React from 'react';

function Card({ title, description }) {
    return (
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg h-full shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="bg-content1 rounded-lg p-6 h-full">
                <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
                <p className="text-default-500">{description}</p>
            </div>
        </div>
    );
}

export default Card;
