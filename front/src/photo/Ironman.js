import React from 'react';
import Ironman from './Ironman.jpg';

class ironman extends React.Component {
    render() {
        return (
            <img src={Ironman} className="App-photo" width="100%" height="auto" alt="Superman" />
        );

    }

}
export default ironman;