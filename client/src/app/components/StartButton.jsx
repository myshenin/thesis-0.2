import React from 'react';

const StartButton = (props) => {
    return (
        <div className="start-button">
            <button onClick={props.getData.bind(null, {
                location: props.location,
                periods: props.periods
            })}>ПУСК</button>
        </div>
    );
};

export default StartButton;