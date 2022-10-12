import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className='topic'>
            <img src={logo} alt="course related" />

            <div className='topic-info'>
                <p>{name}</p>
                <small>Total Quiz : {total}</small>               
            </div>
            <button className='topic-button'> <Link to={`/quiz/${id}`}>Start Quiz</Link></button>
        </div>
    );
};

export default Topic;