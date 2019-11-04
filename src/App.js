import React, { Component} from "react";
import "./index.css";
import Navbars from './Navbars'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavItem, NavLink} from 'reactstrap';
import { Button, ButtonGroup  } from 'reactstrap';
import Icon from "./menu-icon.png";


class App extends Component 
 {
   render(){
    return( 
    <div className="bg">
  <Navbar bg="light" variant="light" >
  <button><img src="./142302.jpg" alt="|||" onClick={this.myfunction} /></button>
      <Nav className="mr-auto" style={{ height: 100, minWidth: '200%' }}>
 
      <Button variant="primary" hr="lg" color="#ff5c5c" defaultChecked value="1">
         Wardrobe
       </Button>
       <Button variant="primary" hr="lg" color="#ff5c5c"  value="2">
         View sets
       </Button>
       <Button variant="primary" hr="lg" color="#ff5c5c"  value="3">
         View Set for a day
       </Button>
       <Button variant="primary" hr="lg" color="#ff5c5c"  value="4">
         Plan trip
       </Button>
       <Button variant="primary" hr="lg" color="#ff5c5c" value="5">
         Add cloth
       </Button>
       <Button variant="primary" hr="lg" color="#ff5c5c"  value="6">
         View profile
       </Button>
   
 
      </Nav>

  </Navbar>
    </div>
  
    );
   }

}
export default App;

