import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
   
     <Navbar className="bg-info ps-3">

          <Navbar.Brand className='align-items-center d-flex justify-content-center ' style={{color:'white'}}  >
          <i class=" pe-3 fa-solid fa-beat fa-film"></i>
           <Link to={'/'} style={{textDecoration:'none', color:"white"}}> Media Player</Link>
       
          </Navbar.Brand>

      </Navbar>
   
  )
}

export default Header
