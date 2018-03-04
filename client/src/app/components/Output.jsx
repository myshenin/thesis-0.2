import React from 'react';
import TSNEChart from "./TSNEChart";

const Output = (props) => {
    const style = {
        gridTemplateRows: `1fr 2fr 1fr ${props.weather.map(() => '300px 50px').join(' ')}`
    };
    return(
        <div className="output" style={style}>
            {
                props.weather.map((weatherForOnePeriod, index) => {
                   return (
                       <TSNEChart
                           key={index}
                           index={index}
                           data={weatherForOnePeriod}
                       />
                   );
                })
            }
        </div>
    );
};

export default Output;