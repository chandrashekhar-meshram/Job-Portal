import React from 'react';
import {Container, Row, Button} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import './Header.scss';
import {Logo} from "../../assets/images/Logo";

const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/jobs',
    display: 'Jobs'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  }
]

const Header = ()=> {

  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center justify-containt'>
            <img src={Logo} />
          </div>
        </Row>
      </Container>
      
    </header>
  )
}

export default Header;