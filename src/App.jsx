import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Button from './components/Button';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import About from './pages/About';
import Emner from './pages/Emner';
import PRG1000 from './pages/PRG1000.jsx';
import DAT1000 from './pages/DAT1000.jsx';
import WEB1100 from './pages/WEB1100.jsx';
import INF1000 from './pages/INF1000.jsx';
import PRO1000 from './pages/PRO1000.jsx';
import SYS1000 from './pages/SYS1000.jsx';
import PRG1100 from './pages/PRG1100.jsx';
import APP2000 from './pages/APP2000.jsx';
import {ThemeProvider} from "./context/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ORL1000 from "./pages/ORL1000";


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedSemesters, setExpandedSemesters] = useState({});
  const location = useLocation(); // Add this line to define location

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleSemester = (semester) => {
    setExpandedSemesters(prev => ({
      ...prev,
      [semester]: !prev[semester]
    }));
  };

  // Strukturerte data for emner
  const semesterData = [
    {
      id: 1,
      title: "1. semester",
      courses: [
        { id: "prg1000", title: "Grunnleggende programmering 1", path: "/emner/prg1000" },
        { id: "dat1000", title: "Database 1", path: "/emner/dat1000" },
        { id: "web1100", title: "Webutvikling og HCI", path: "/emner/web1100" },
        { id: "inf1000", title: "Digital forretningsforståelse", path: "/emner/inf1000" },
      ]
    },
    {
      id: 2,
      title: "2. semester",
      courses: [
          { id: "pro1000", title: "Praktisk prosjektarbeid", path: "/emner/pro1000" },
          { id: "sys1000", title: "Systemutvikling", path: "/emner/sys1000" },
        { id: "prg1100", title: "Grunnleggende programmering 2", path: "/emner/prg1100" },
        { id: "orl1000", title: "Organisering og ledelse", path: "/emner/orl1000" },
      ]
    },
    {
      id: 3,
      title: "3. semester",
      courses: [
        { id: "app2000", title: "Applikasjonsutvikling for web", path: "/emner/app2000" },
        { id: "dat2000", title: "Database 2", path: "/emner/dat2000" },
        { id: "obj2000", title: "Objektorientert programmering", path: "/emner/obj2000" },
        { id: "esb1000", title: "Etikk og samfunnsansvar", path: "/emner/esb1000" },
      ]
    },
    {
      id: 4,
      title: "4. semester",
      courses: [
        { id: "app2000", title: "Applikasjonsutvikling for web", path: "/emner/app2000" },
        { id: "obj2100", title: "Objektorientert programmering 2", path: "/emner/obj2100" },
        { id: "met1020", title: "Samfunnsvitenskapelig metode", path: "/emner/met1020" },
        { id: "sik2000", title: "Informasjonssikkerhet", path: "/emner/sik2000" }
      ]
    },
    {
      id: 5,
      title: "5. semester",
      courses: [
        { id: "bid3000", title: "Business intelligence og datavarehus", path: "/emner/bid3000" },
        { id: "sce200d", title: "Sustainability Marketing and Circular Economy", path: "/emner/sce200d" },
        { id: "dt3000k", title: "Digital transformation", path: "/emner/dt3000k" },
        { id: "eha3000d", title: "E-commerce", path: "/emner/eha3000d" }
      ]
    },
    {
      id: 6,
      title: "6. semester",
      courses: [
        { id: "bop3000", title: "Praktisk prosjektarbeid", path: "/emner/pro1000" },
        { id: "prr3000", title: "Systemutvikling", path: "/emner/sys1000" },
        { id: "ai3000r", title: "Grunnleggende programmering 2", path: "/emner/prg1100" }
      ]
    },
  ]

  return (
      <ThemeProvider>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">

        {/* Drawer Component */}
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} position="left">
          <div className="flex flex-col space-y-4 p-2 overflow-y-auto max-h-screen bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">Meny</h2>

            <Link
                to="/"
                className={`p-2 rounded flex items-center gap-2 ${location.pathname === '/' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={closeDrawer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
              Home
            </Link>

            <Link
                to="/about"
                className={`p-2 rounded flex items-center gap-2 ${location.pathname === '/about' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={closeDrawer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>


              Om
            </Link>

            {/* Emner med undermeny */}
            <div className="flex flex-col">
              <div className="p-2 font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>
                Emner
              </div>

              {/* Semestre */}

              {semesterData.map((semester) => (
                  <div key={semester.id} className="pl-4 flex flex-col">
                    <div
                        className="p-2 font-thin flex justify-between items-center cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleSemester(semester.id)}
                    >
                      <span>{semester.title}</span>
                      <svg
                          className={`w-4 h-4 transition-transform ${expandedSemesters[semester.id] ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Kurs for semesteret */}
                    {expandedSemesters[semester.id] && (
                        <div className="pl-4 flex flex-col space-y-2">
                          {semester.courses.map((course) => (
                              <Link
                                  key={course.id}
                                  to={course.path}
                                  className={`p-2 rounded ${location.pathname === course.path ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                                  onClick={closeDrawer}
                              >
                                {course.title}
                              </Link>
                          ))}
                        </div>
                    )}
                  </div>
              ))}
            </div>

          </div>
        </Drawer>





        {/* Navigation Bar - z-40 ensures it's below the drawer */}
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4 relative z-40">
          <div className="container mx-auto flex items-center">


            {/* Left side - Menu button */}
            <div className="w-1/3 flex justify-start">
              <Button
                  variant="secondary"
                  onClick={openDrawer}
                  className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
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
              <Link to="/" className="text-xl font-bold justify-self-center cursor-pointer">Tvennings portfolio</Link>
            </div>

            {/* Right side - Empty or can add other elements. Auto/dark/light // Accessibility settings? */}
            <div className="w-1/3 flex justify-end">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>

        {/* Main Content with Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/emner" element={<Emner />} />
          <Route path="/emner/prg1000" element={<PRG1000 />}/>
          <Route path="/emner/dat1000" element={<DAT1000 />}/>
          <Route path="/emner/web1100" element={<WEB1100 />}/>
          <Route path="/emner/inf1000" element={<INF1000 />}/>
          <Route path="/emner/pro1000" element={<PRO1000/>}/>
          <Route path="/emner/sys1000" element={<SYS1000 />}/>
          <Route path="/emner/prg1100" element={<PRG1100 />}/>
          <Route path="/emner/orl1000" element={<ORL1000 />}/>
          <Route path="/emner/app2000" element={<APP2000 />}/>

          {/* Dynamisk genererte ruter for emner */}



          <Route path="/projects" element={<div className="container mx-auto p-8">Projects page coming soon!</div>} />
          <Route path="/contact" element={<div className="container mx-auto p-8">Contact page coming soon!</div>} />
          <Route path="*" element={<div className="container mx-auto p-8">Page not found!</div>} />
        </Routes>

      </div>
      </ThemeProvider>
  );
}

export default App;
