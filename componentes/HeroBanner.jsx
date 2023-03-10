import React from 'react'
import Link from 'next/link';

const HeroBanner = () => {
    return (
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">SMALL TEXT</p>
          <h3>MID TEXT</h3>
          <img src="" alt="Audifonos" className="hero-banner-image" />
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>A bone le gusta el webo de Devin</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    );
  };
  

export default HeroBanner