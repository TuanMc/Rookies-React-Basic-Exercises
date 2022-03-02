import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() { // This should be class component
  // Add a state with property 'bootcamp'

  return (
    <React.Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <Navbar/>
      <Home name="Rookies"/> <!-- Replace this value with this.state.bootcamp -->
    </React.Fragment>
  );
}

export default App;
