import React from 'react';
import AllSupers from './AllSupers.jpg';
import './Photo.css';
class SuperHeroes extends React.Component {
    render() {
        return (
            <img src={AllSupers} className="App-photo"
                width=" 100%"
              
                height="auto"
                alt="AllSupers" />


        );

    }

}
export default SuperHeroes;