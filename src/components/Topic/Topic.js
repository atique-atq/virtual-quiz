import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;

    return (
        <div className='topic'>
            <img src={logo} alt="course related" />

            <div className='topic-info'>
                <p>{name}</p>
                <small>Total Quiz : {total}</small>
                <button className='topic-button'>Start Quiz</button>
            </div>
            
        </div>
    );
};

export default Topic;