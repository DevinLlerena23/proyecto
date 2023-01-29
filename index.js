
import React from 'react'
import { Product,FooterBanner,HeroBanner,Footer,Cart,Layout,Navbar } from 'componentes';
const Home = () => {
  return (
    <>
    <HeroBanner/>

      
      <div className="products-heading">
        <h2>Los mejores productos </h2>
        <p>Audifonos de todas las gamas</p>
      </div>
      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => (
          <div>{product}</div>
        ))}
      </div>
      
    <FooterBanner/>
    </>
    
    
  );
  
};

export default Home;