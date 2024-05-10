/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 16:52:54
*/
import React, { FC, useEffect } from 'react';
import './Header.css';
import { Dropdown } from 'react-bootstrap';




interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])



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
      </div>
    </div >
  );
}

export default Header;