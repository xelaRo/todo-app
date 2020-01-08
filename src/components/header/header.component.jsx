import React from 'react';
import './header.styles.scss'

import CustomNavBar from '../header/custom-navbar/custom-navbar.component'

import {
  Navbar 
} from 'react-bootstrap'

import Brand from './brand/brand.component';


const Header = props => (
    <Navbar bg="dark" variant="dark">
      <Brand/>
      <CustomNavBar />
  </Navbar>
)


export default Header;