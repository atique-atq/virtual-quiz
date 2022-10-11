import React from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ question, index }) => {
    const options = question.options;
    const clickAnswer = (option) => {
        if (option === question.correctAnswer) {
            //react toast message
            toast.success('Correct answer! Good job!!!');
        } 
        else {
            toast.warning('wrong answer');
        }
    }

    const revealAnswer = () => {
        toast.info(question.correctAnswer);  
    } 

    return (
        <div className='question-cart'>
            <h5 className='question'>Quiz {parseInt(index) + 1}: {question.question} </h5>
            <span className='eyeIcon' onClick={revealAnswer}>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </span>
            <div className='question-options'>
                {
                    options.map(option => <div>
                        <div className='option' onClick={() => clickAnswer(option)}>
                        <input type="radio" name="" id="" />
                        <span className='option-text'>{option}</span>
                        </div>
                        <ToastContainer
                            autoClose={1500}
                            closeOnClick
                            pauseOnHover={false}
                            hideProgressBar={true}
                        />
                    </div>
                    )
                }
            </div>            
        </div>
    );
};

export default Question;