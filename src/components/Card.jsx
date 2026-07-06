import React from 'react';

function Card({ title, description }) {
    return (
        <div className="bg-content1 rounded-xl h-full shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="p-6 h-full">
                <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
                <p className="text-default-500">{description}</p>
            </div>
        </div>
    );
}

export default Card;
