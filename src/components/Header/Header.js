import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div className='name'>
                <p>Virtual Quiz</p>
            </div>   
        
            <div>
                <Link to="/">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;