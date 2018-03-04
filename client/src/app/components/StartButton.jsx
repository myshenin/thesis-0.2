import React from 'react';

const StartButton = (props) => {
    return (
        <div className="start-button">
            <button onClick={() => {
                props.getData({
                    location: props.location,
                    periods: props.periods.filter(period => period.start && period.end)
                });
                props.inputOutputSwitch({
                    width: props.inputOutputSwitcher.width,
                    mode: 'OUTPUT'
                });
            }}>ПУСК
            </button>
        </div>
    );
};

export default StartButton;