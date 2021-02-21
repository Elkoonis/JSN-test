import React from 'react';
import Batman from './Batman.jpg';

class batman extends React.Component {
    render() {
        return (
            <img src={Batman} className="App-photo" width="100%" height="auto" alt="Batman" />
        );

    }

}
export default batman;