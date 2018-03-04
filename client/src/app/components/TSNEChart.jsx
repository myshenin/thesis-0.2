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
                    <Scatter name='TSNE data' data={[{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
                        {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                        {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]} fill={getRandomColor()}/>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TSNEChart;