/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/05/2024 11:30:14
*/
import React, { FC, useEffect } from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Home">
         <Banner />
        <div className='bande'>bande</div>
        <div className=" nos-services">
          <h1 className='mt-3'>NOS SERVICES</h1>
        </div>
        <div className="h100 border"> Container</div>
      </div>
  );
}

export default Home;