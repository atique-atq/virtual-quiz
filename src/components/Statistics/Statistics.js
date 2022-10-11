import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const topics = useLoaderData().data;

    return (
        <div>
            <div className='chart-container'>
             <h3>Total question amount</h3>
                <ResponsiveContainer width="90%" height={400}>
                    <BarChart data={topics}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>    

            </div>
        </div>
    );
};

export default Statistics;