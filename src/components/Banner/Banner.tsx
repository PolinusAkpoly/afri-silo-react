/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/05/2024 11:55:25
*/
import React, { FC, useEffect } from 'react';
import './Banner.css';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

interface BannerProps {

}


const Banner: FC<BannerProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Banner">
      <MDBCarousel showControls interval={3000}>
        <MDBCarouselItem itemId={1} interval={2000}>
          <img src='/assets/images/banner1.jpg' className='d-block w-100 h-50' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src='/assets/images/banner2.jpg' className='d-block w-100 h-50' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src='/assets/images/banner1.jpg' className='d-block w-100 h-50' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}

export default Banner;