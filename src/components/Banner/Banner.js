import React from 'react';
import './Banner.css';
import banner from '../../images/banner.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='header-banner'>
            <div className='banner-text'>
                <h3>Welcome to Virtual Quiz</h3>
                <p>This platform continues to be a pioneer in education and is constantly innovating, improving and evolving as a online platform. With all our experience and well-designed systems, we are able to ensure a consistently high standard of education.</p>
                <button> <Link to="/">Show Details </Link></button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;