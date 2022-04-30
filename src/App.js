import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonals from './components/testimonals/Testimonals';
// import Services from './components/services/Services';
import './index.css';

function App() {
  return (
    <div> 
      <Header />    
      <Navbar />       
      <About />
      <Experience />
      <Contact />      
      <Footer />
      {/* <Portfolio /> */}
      {/* <Testimonals /> */}
      {/* <Services /> */}
    </div>
  );
}

export default App;
