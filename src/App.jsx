import React from 'react';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My HeroUI React App</h1>
          <p className="text-gray-600 mb-6">This is a simple React app built with Tailwind CSS.</p>
          <Button onClick={handleClick}>Get Started</Button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Feature One" 
            description="Description of your first amazing feature." 
          />
          <Card 
            title="Feature Two" 
            description="Description of your second amazing feature." 
          />
          <Card 
            title="Feature Three" 
            description="Description of your third amazing feature." 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
