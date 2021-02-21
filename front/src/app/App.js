import React from 'react';
import "typeface-roboto";
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import SuperHeroes from '../photo/AllSupers.js';


class App extends React.Component {
  render() {


    return (
     
      <div className="App">
  
        <header id="pageHeader"> <Header /></header>
        <main id="pageMain"> <Main /></main>
        <photo id="pagePhoto"> <SuperHeroes /></photo>
      

      </div>

   
    
 
    
    );
  }
}

export default App;
