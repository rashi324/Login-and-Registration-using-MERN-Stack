import React from 'react';
import './Home.css';  
import welcome from './assets/welcome.jpg'

const Home = () => {
  return (
    <div className="home">
      <img src={welcome} alt="" />
      
    </div>
  );
}

export default Home;
