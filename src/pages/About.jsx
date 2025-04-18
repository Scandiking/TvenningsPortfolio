import React from 'react';

function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Om meg</h1>
                <p className="text-gray-600 mb-4">
                    Hello! I'm a passionate web developer with expertise in building modern,
                    responsive web applications using React and other cutting-edge technologies.
                </p>
                <p className="text-gray-600 mb-4">
                    With a strong foundation in frontend development and a keen eye for design,
                    I create intuitive user interfaces that deliver exceptional user experiences.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Mine ferdigheter</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">HTML/CSS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Responsive Design</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">UI/UX</span>
                </div>
            </div>
        </div>
    );
}

export default About;
