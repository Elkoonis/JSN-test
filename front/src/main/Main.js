import React from 'react';
import './Main.css';
import "typeface-roboto";
import Superman from '../photo/Superman.png';
import Ironman from '../photo/Ironman.jpg';
import Batman from '../photo/Batman.jpg';

class Main extends React.Component {
  render() {
    return (
      <div className="heroCards">

          <div className="card superman">
       
              <img src={Superman} />
              <p>Superman</p>
           
          </div>

          <div className="card ironmanr">
          
              <img src={Ironman} />
              <p>Ironman</p>
           
          </div>

          <div className="card batman">
           
              <img src={Batman} />
               <p>Batman</p>
          
          </div>
         
      </div>
      
    )
  }
}
export default Main;