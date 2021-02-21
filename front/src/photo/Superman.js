import React from 'react';
import Superman from './Superman.png';

class Superman extends React.Component {
    render() {
        return (
            <img src={Superman} className="App-photo" width="100%" height="auto" alt="Superman" />
        );

    }

}
export default Superman;