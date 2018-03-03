import React from 'react';

const StartButton = (props) => {
    return (
        <div className="start-button">
            <button onClick={props.getData.bind(null, {
                location: props.location,
                periods: props.periods.filter(period => period.start && period.end)
            })}>ПУСК</button>
        </div>
    );
};

export default StartButton;