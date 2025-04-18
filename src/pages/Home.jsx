import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

function Home() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
                <p className="text-gray-600 mb-6">I'm a web developer specializing in React and modern frontend technologies.</p>
                <div className="flex flex-wrap gap-4">
                    <Button onClick={handleClick} variant="primary">Contact Me</Button>
                    <Button onClick={handleClick} variant="secondary">View Projects</Button>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    title="Frontend Development"
                    description="Building responsive and interactive user interfaces with React, Tailwind CSS, and modern JavaScript."
                />
                <Card
                    title="UI/UX Design"
                    description="Creating intuitive and visually appealing designs that enhance user experience."
                />
                <Card
                    title="Backend Integration"
                    description="Connecting frontend applications with backend services and APIs."
                />
            </div>
        </div>
    );
}

export default Home;
