import React from 'react';
import './Header.css';
import "typeface-roboto";


class Header extends React.Component {
  render() {
    return (

      <header className="App-header">

        <div className="welcome">

          <h1>Superhero characters</h1>

          <h2>Read about your favourite superhero </h2>
         
        </div>

      </header>

    );
  }
}
export default Header;