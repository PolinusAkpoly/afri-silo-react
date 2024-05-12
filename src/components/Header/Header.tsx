/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 16:52:54
*/
import React, { FC, useEffect, useState } from 'react';
import './Header.css';
import { Dropdown } from 'react-bootstrap';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  // MDBBtn,
  // MDBIcon,
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';


interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {
  const [showNavExternal, setShowNavExternal] = useState<boolean>(false);
 





  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])


{/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card.Body>
    </Card> */}



  return (
    <div className="Header ">
      <div className='header-top d-flex text-white'>
        <div className='d-flex'>
          <div className='logo'>
            <img src="/assets/images/Logo_AFRISILO.jpg" alt="logo AFRISILO" />
          </div>
          <div className='company-name '>AFRI SILO</div>
        </div>
        <div className='company-number d-flex mt-1'>
          <>+229 97 58 21 85<p className='phone-number2'> / +229 94 85 45 68</p> </>
        </div>
      </div>

      <div className='header-bottom'>
        
        <ul className='d-flex header-bottom-content'>
          <li>ACCUEIL</li>
          <li>A PROPOS</li>
          <li>NOS PRODUITS</li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                NOS SERVICES
              </Dropdown.Toggle>
              
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">PRODUCTION</Dropdown.Item>
                <Dropdown.Item href="#/action-2">APPROVISIONNEMENT</Dropdown.Item>
                <Dropdown.Item href="#/action-3">STOCKAGE</Dropdown.Item>
                <Dropdown.Item href="#/action-3">TRANSFORMATION</Dropdown.Item>
                <Dropdown.Item href="#/action-3">TRANSPORT DES PRODUITS AGRICOLES</Dropdown.Item>
                <Dropdown.Item href="#/action-3">COMMERCIALISATION DES INTRANTS ET ÉQUIPEMENTS AGRICOLES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>CONTACT</li>
        </ul>
        <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={()=>setShowNavExternal(!showNavExternal)}
          >
            {/* <MDBIcon icon='bars' fas /> */}
            <div className='btnMenuResponsive d-flex gap-2 p-2'>
              <div className='line'>line</div>
              <div className='line'>line</div>
              <div className='line'>line</div>
            </div>
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      {showNavExternal && (
        <div className='bg-light shadow-3 p-4'>
          <ul className='d-flex header-bottom-content-responsive '>
          <li>ACCUEIL</li>
          <li>A PROPOS</li>
          <li>NOS PRODUITS</li>
          <li className='li'>
            <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                NOS SERVICES
              </Dropdown.Toggle>
              
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">PRODUCTION</Dropdown.Item>
                <Dropdown.Item href="#/action-2">APPROVISIONNEMENT</Dropdown.Item>
                <Dropdown.Item href="#/action-3">STOCKAGE</Dropdown.Item>
                <Dropdown.Item href="#/action-3">TRANSFORMATION</Dropdown.Item>
                <Dropdown.Item href="#/action-3">TRANSPORT DES PRODUITS AGRICOLES</Dropdown.Item>
                <Dropdown.Item href="#/action-3">COMMERCIALISATION DES INTRANTS ET ÉQUIPEMENTS AGRICOLES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </li>
          <li>CONTACT</li>
        </ul>
        </div>
      )}
    </>
      </div>
    </div >
  );
}

export default Header;