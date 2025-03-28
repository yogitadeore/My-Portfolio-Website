import React ,{useEffect} from "react";
import "./index.css"
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from "./routes/About";
import Project from "./routes/Project";
import Experiences from "./routes/Experiences";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      once: true,     // Whether animation should happen only once
      offset: 100,    // Trigger animation earlier/later
    });
  }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/experience' element={<Experiences />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/contact' element={<Contact />}/>
     
    </Routes>
    </>
  );
}

export default App;
