import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
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
import DAT2000 from './pages/DAT2000.jsx';
import OBJ2000 from './pages/OBJ2000.jsx';
import OBJ2100 from './pages/OBJ2100.jsx';
import ESB1000 from './pages/ESB1000.jsx';
import MET1020 from './pages/MET1020.jsx';
import AI3000R from './pages/AI3000R.jsx';
import {ThemeProvider} from "./context/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ORL1000 from "./pages/ORL1000";
import {HeroUIProvider} from "@heroui/system";
import {Accordion, AccordionItem, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, useDisclosure} from "@heroui/react";
import logo from "./images/favicon-96x96.png"
import {Image} from "@heroui/image";

function AppContent() {
  // const [expandedSemesters, setExpandedSemesters] = useState({});
  const location = useLocation();

  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const [openSemester, setOpenSemester] = useState(null);

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
        { id: "ai3000r", title: "Artificial Intelligence for Business Applications", path: "/emner/ai3000r" },
        { id: "sel3000r", title: "Digital transformation", path: "/emner/sel3000r" },
        { id: "mob3000", title: "Applikasjonsutvikling for mobile enheter", path: "/emner/mob3000" }
      ]
    },
    {
      id: 6,
      title: "6. semester",
      courses: [
        { id: "bop3000", title: "Placeholder", path: "/emner/pro1000" },
        { id: "prr3000", title: "Placeholder", path: "/emner/sys1000" },
        { id: "ai3000r", title: "Placeholder", path: "/emner/prg1100" }
      ]
    },
  ]



  return (
      <div className="min-h-screen bg-background text-foreground">


        {/* DRAWER */}
        <Drawer
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="left"
            size="sm"
            backdrop="blur"
            portalContainer={document.body}
            classNames={{
              wrapper: "z-[9999]",
              backdrop: "z-[9998]",
              base: "z-[9999]",
            }}
        >
          <DrawerContent className="bg-content1 text-foreground
          style={{ backgroundColor: 'var(--heroui-content1)' }}">
            {(onClose) => (
                <>
                  <DrawerHeader className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold">Meny</h2>
                  </DrawerHeader>
                  <DrawerBody className="overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                      <Link
                          to="/"
                          className={`p-2 rounded flex items-center gap-2 ${location.pathname === '/' ? 'bg-primary text-primary-foreground' : 'hover:bg-content2'}`}
                          onClick={onClose}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                      </Link>

                      <Link
                          to="/About"
                          className={`p-2 rounded flex items-center gap-2 ${location.pathname === '/about' ? 'bg-primary text-primary-foreground':'hover:bg-content2'}`}
                          onClick={onClose}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>
                        Om
                      </Link>

                      <div className="flex flex-col">
                        <div className="p-2 font-medium flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                          </svg>
                          Emner
                        </div>

                        <Accordion
                            selectedKeys={openSemester ? [openSemester] : []}
                            onSelectionChange={(keys) => {
                              const selectedKey = Array.from(keys)[0];
                              setOpenSemester(selectedKey === openSemester ? null : selectedKey);
                            }}
                            className="pl-4"
                        >
                          {semesterData.map((semester) => (
                              <AccordionItem
                                  key={semester.id}
                                  title={semester.title}
                                  indicator={({ isOpen }) => (
                                      <svg
                                          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                  )}
                                  classNames={{
                                    trigger: "p-2 font-thin hover:bg-content2",
                                    content: "pl-4 flex flex-col space-y-2 pb-2"
                                  }}
                              >
                                {semester.courses.map((course) => (
                                    <Link
                                        key={course.id}
                                        to={course.path}
                                        className={`p-2 rounded ${location.pathname === course.path ? 'bg-primary text-primary-foreground' : 'hover:bg-content2'}`}
                                        onClick={onClose}
                                    >
                                      {course.title}
                                    </Link>
                                ))}
                              </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </DrawerBody>
                </>
            )}
          </DrawerContent>
        </Drawer>


        <nav className="bg-content1 shadow-md p-4 relative z-40">
          <div className="container mx-auto flex items-center">
            <div className="w-1/3 flex justify-start">
              <Button
                  color="bg-content1"
                  onPress={onOpen}
                  isIconOnly
                  className="p-0.5 bg-content2 hover:bg-content4 dark:bg-content2 dark:hover:bg-content3"
                  aria-label="Open menu"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </div>

            <div className="w-1/3 flex justify-center">
              <Link to="/">
                <Image
                    shadow="sm"
                    radius="sm"
                    src={logo}
                    alt="Tvenning Tech Logo"
                    width={60}
                />
              </Link>
            </div>

            <div className="w-1/3 flex justify-end">
              <ThemeSwitcher/>
            </div>
          </div>
        </nav>

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
          <Route path="/emner/dat2000" element={<DAT2000 />}/>
          <Route path="/emner/obj2000" element={<OBJ2000 />}/>
          <Route path="/emner/obj2100" element={<OBJ2100 />}/>
          <Route path="/emner/esb1000" element={<ESB1000 />}/>
          <Route path="/emner/met1020" element={<MET1020 />}/>
          <Route path="/emner/ai3000r" element={<AI3000R />} />
          <Route path="/projects" element={<div className="container mx-auto p-8">Projects page coming soon!</div>} />
          <Route path="/contact" element={<div className="container mx-auto p-8">Contact page coming soon!</div>} />
          <Route path="*" element={<div className="container mx-auto p-8">Page not found!</div>} />
        </Routes>
      </div>
  );
}

function App() {
  return (
      <ThemeProvider>
        <HeroUIProvider>
          <Router>
            <AppContent />
          </Router>
        </HeroUIProvider>
      </ThemeProvider>
  );
}

export default App;
