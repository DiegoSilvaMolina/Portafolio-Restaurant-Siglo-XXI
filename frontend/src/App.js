import React, { Component } from 'react';
   import './App.css';
   import "bootstrap/dist/css/bootstrap.min.css";
   import Routes from './Routes/Routes';
    class App extends Component { 
      render() { 
        return ( 
          <div className="App">
              <Routes></Routes>
          </div>
      ); 
      } 
    } 
      export default App;
