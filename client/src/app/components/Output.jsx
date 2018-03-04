import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/fontawesome-free-solid';

import TSNEChart from "./TSNEChart";

const Output = (props) => {
    const style = {
        gridTemplateRows: `50px 50px 50px ${props.weather.map(() => '300px 50px').join(' ')}`
    };
    return(
        <div className="output" style={style}>
            <div className="back">
                <button onClick={props.inputOutputSwitch.bind(null, {
                    width: props.inputOutputSwitcher.width,
                    mode: 'INPUT'
                })}>
                    <FontAwesomeIcon icon={faBackward} size="lg"/>
                </button>
            </div>
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