import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {

  const [currentPage, changePage] = useState('About');
  
  const renderSections = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Project') {
      return <Project />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  }
  
  return (
    <div>
      <Header></Header>
      <Navigation changePage={changePage}></Navigation>
      {renderSections()}
      <Footer></Footer>
    </div>
  );
}

export default App;
