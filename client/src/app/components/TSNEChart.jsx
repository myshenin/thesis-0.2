import React from 'react';
import {ResponsiveContainer, ScatterChart, XAxis, YAxis, CartesianGrid, Scatter} from 'recharts';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const TSNEChart = (props) => {
    const style = {
        gridRow: `${4 + 2 * props.index}/${5 + 2 * props.index}`
    };
    return (
        <div className="chart" style={style}>
            <ResponsiveContainer>
                <ScatterChart>
                    <XAxis dataKey={'x'} type="number" name='x'/>
                    <YAxis dataKey={'y'} type="number" name='y'/>
                    <CartesianGrid />
                    <Scatter name='TSNE data' data={props.data} fill={getRandomColor()}/>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TSNEChart;