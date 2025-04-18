import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Drawer from './components/Drawer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
      <div className="bg-gray-100 min-h-screen">

        {/* Drawer Component */}
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} position="left">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold mb-4">Meny</h2>
            <a href="#home" className="p-2 hover:bg-gray-100 rounded">Hjem</a>
            <a href="#about" className="p-2 hover:bg-gray-100 rounded">Om</a>
            <a href="#projects" className="p-2 hover:bg-gray-100 rounded">Prosjekter</a>
            <a href="#contact" className="p-2 hover:bg-gray-100 rounded">Contact</a>
          </div>
        </Drawer>

        {/* Navigation Bar - z-40 ensures it's below the drawer */}
        <nav className="bg-white shadow-md p-4 relative z-40">
          <div className="container mx-auto flex items-center">


            {/* Left side - Menu button */}
            <div className="w-1/3 flex justify-start">
            <button
                onClick={openDrawer}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </div>

            {/* Center - Portfolio title */}
            <div className="w-1/3 flex justify-center">
              <h1 className="text-xl font-bold justify-self-center">Tvennings portfolio</h1>
            </div>

            {/* Right side - Empty or can add other elements. Auto/dark/light // Accessibility settings? */}
            <div className="w-1/3 flex justify-end">
              {/* Stuffing */}
            </div>

          </div>
        </nav>



        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My HeroUI React App</h1>
            <p className="text-gray-600 mb-6">This is a simple React app built with Tailwind CSS.</p>
            <Button>Get Started</Button>
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
