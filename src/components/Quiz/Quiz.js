import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {name, total, questions} = quiz;

    console.log(quiz)

    return (
        <div className='quiz-container'>
            <h3>Quiz of : {name}</h3>
            <p>Total number of quiz : {total}</p>
            {
                questions?.map((question, idx) => <Question
                    key={question.id}
                    question={question}
                    index={idx}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;