import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
