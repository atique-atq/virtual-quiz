import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics);

    return (
        <div>
            <Banner></Banner>
            <div className='topics-container'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        
                    ></Topic>)
                }

            </div>
        </div>
    );
};

export default Topics;