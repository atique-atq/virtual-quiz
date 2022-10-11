import React from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question, index }) => {
    const options = question.options;
    const clickAnswer = (option) => {
        if (option === question.correctAnswer) {
            //react toast message
            toast.success('Correct answer! Good job!!!');
        }
        
    }

    return (
        <div className='question-cart'>
            <h4 className='question'>Quiz {parseInt(index)+1}: {question.question} </h4>
            <div className='question-options'>
                {
                    options.map(option => <div>
                        <div className='option' onClick={() => clickAnswer(option)}>
                        <input type="radio" name="" id="" />
                        <span className='option-text'>{option}</span>
                        </div>
                        <ToastContainer/>
                    </div>
                    )
                }
            </div>            
        </div>
    );
};

export default Question;