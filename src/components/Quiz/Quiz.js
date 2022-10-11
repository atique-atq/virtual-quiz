import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <p>This is quiz : {quiz}</p>
        </div>
    );
};

export default Quiz;