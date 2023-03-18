import React from 'react';
import NavBar from './components/Layout/NavBar';
import Portfolio from './components/Portfolio/Portfolio';

import Intro from './components/Layout/Intro';
import Team from './components/Team/Team';
import Pledge from './components/Pledge/Pledge';
import Paint from './components/Paint/Paint';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <header>
        <NavBar />
        <Intro />
      </header>
      <section>
        <Portfolio />
        <Team />
        <Pledge />
      </section>
      <footer>
        <Paint />
        <Contact />
      </footer>
      
    </div>
  )
}

export default App
