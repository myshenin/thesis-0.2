import React from 'react';

const Output = (props) => {
    const style = {
        gridTemplateRows: `1fr 2fr 1fr ${props.weather.map(() => '7.5fr 1fr').join(' ')}`
    };
    return(
        <div className="output" style={style}>OUTPUT</div>
    );
};

export default Output;