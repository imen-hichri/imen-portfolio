import React from 'react';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';

import Linkssocial from './Component/Linkssocial';
import NavBar from './Component/NavBar';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';


function App() {
  return (
    <div>
     <NavBar />
      <Home />
   <About/>
   < Portfolio/>
   <Skills />
   <Contact/>
      < Linkssocial />
      
    <Footer/>
   
      
    </div>
    
  
  );
}

export default App;
