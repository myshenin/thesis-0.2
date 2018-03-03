import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
moment.locale('uk');

const onChangeStart = (key, action) => {
    return (date) => {
        action({key, date});
    };
};

const onChangeEnd = (key, action) => {
    return (date) => {
        action({key, date});
    };
};
const PeriodsPicker = (props) => {
    return (
        <div className="periods-picker">
            {
                props.periods.map((period, index) => (
                    <div key={3 * index}>
                        <DatePicker
                            selected={period.start}
                            selectsStart
                            startDate={period.start}
                            endDate={period.end}
                            onChange={onChangeStart(index, props.setStartDate)}
                            key={3 * index + 1}
                        />

                        <DatePicker
                            selected={period.end}
                            selectsEnd
                            startDate={period.start}
                            endDate={period.end}
                            onChange={onChangeEnd(index, props.setEndDate)}
                            key={3 * index + 2}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default PeriodsPicker;