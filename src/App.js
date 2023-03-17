import React from 'react';
import NavBar from './components/Layout/NavBar';
import Portfolio from './components/Portfolio/Portfolio';

import Intro from './components/Layout/Intro';
import Team from './components/Team/Team';

function App() {

  return (
    <div className="App">
      <section>
        <NavBar />
        <Intro />
      </section>
      <section>
        <Portfolio />
        <Team />
      </section>
      
    </div>
  )
}

export default App
