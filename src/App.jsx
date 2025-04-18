import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Card from './components/Card';
import Button from './components/Button';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation(); // Add this line to define location

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
            <Link
                to="/"
                className={`p-2 rounded ${location.pathname === '/' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={closeDrawer}
            >
              Home
            </Link>

            <Link
                to="/about"
                className={`p-2 rounded ${location.pathname === '/about' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={closeDrawer}
            >
              About
            </Link>
            <Link
                to="/projects"
                className={`p-2 rounded ${location.pathname === '/projects' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={closeDrawer}
            >
              Projects
            </Link>
            <Link
                to="/contact"
                className={`p-2 rounded ${location.pathname === '/contact' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={closeDrawer}
            >
              Contact
            </Link>
          </div>
        </Drawer>



        {/* Navigation Bar - z-40 ensures it's below the drawer */}
        <nav className="bg-white shadow-md p-4 relative z-40">
          <div className="container mx-auto flex items-center">


            {/* Left side - Menu button */}
            <div className="w-1/3 flex justify-start">
              <Button
                  variant="secondary"
                  onClick={openDrawer}
                  className="p-2"
                  aria-label="Open menu"
              >

                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
              </Button>
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

        {/* Main Content with Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<div className="container mx-auto p-8">Projects page coming soon!</div>} />
          <Route path="/contact" element={<div className="container mx-auto p-8">Contact page coming soon!</div>} />
          <Route path="*" element={<div className="container mx-auto p-8">Page not found!</div>} />
        </Routes>

      </div>
  );
}

export default App;
