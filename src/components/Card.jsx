import React from 'react';

function Card({ title, description }) {
    return (
        <div className="bg-gradient-to-br from-[#3461D1] to-[#5B7FE0] p-[1px] rounded-lg h-full shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(52,97,209,0.5)]">
            <div className="bg-gradient-to-b from-blue-50 to-content1 dark:from-content1 dark:to-content1 rounded-lg p-6 h-full">
                <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
                <p className="text-default-500">{description}</p>
            </div>
        </div>
    );
}

export default Card;
