import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => (
  <div className="app">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/"> CHIRAG BANSAL </NavbarBrand>
      </div>
    </Navbar>
  </div>
);

export default Header;
