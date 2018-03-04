import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPlay} from '@fortawesome/fontawesome-free-solid';
import {faClock} from '@fortawesome/fontawesome-free-regular';

const MobileTabs = (props) => {
    return (
        <div className="mobile-tabs">
            <div className={`tab ${props.tabs[0] && 'current'}`}
                 onClick={props.changeTab.bind(null, [true, false, false])}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg"/>
                <div>Місце</div>
            </div>
            <div className={`tab ${props.tabs[1] && 'current'}`}
                 onClick={props.changeTab.bind(null, [false, true, false])}>
                <FontAwesomeIcon icon={faClock} size="lg"/>
                <div>Періоди</div>
            </div>
            <div className={`tab ${props.tabs[2] && 'current'}`} onClick={() => {
                props.changeTab([false, false, true]);
                props.getData({
                    location: props.location,
                    periods: props.periods.filter(period => period.start && period.end)
                });
            }}>
                <FontAwesomeIcon icon={faPlay} size="lg"/>
                <div>Результат</div>
            </div>
        </div>
    )
};

export default MobileTabs;