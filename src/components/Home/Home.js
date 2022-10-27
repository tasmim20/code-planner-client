import React from 'react';
import best from '../../assets/images/best.jpg'
import './Home.css';

const Home = () => {
    return (
        <div>
           <div className='header-img'>
          

            <img className='img-fluid' src={best} alt="" />
           </div>
        </div>
    );
};

export default Home;