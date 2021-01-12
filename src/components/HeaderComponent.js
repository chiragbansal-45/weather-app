import React , {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <div className="app">
        <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" > CHIRAG BANSAL </NavbarBrand>
        </div>
        </Navbar>
      </div>
        )
    }
}


export default Header;