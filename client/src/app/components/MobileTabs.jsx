import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/fontawesome-free-solid';
import {faPlay} from '@fortawesome/fontawesome-free-solid';
import {faClock} from '@fortawesome/fontawesome-free-regular';

const MobileTabs = (props) => {
    return (
        <div className="mobile-tabs">
            <div className={`tab ${props.tabs[0] && 'current'}`} onClick={props.changeTab.bind(null, [true, false, false])}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg"/>
                <div>Місце</div>
            </div>
            <div className={`tab ${props.tabs[1] && 'current'}`} onClick={props.changeTab.bind(null, [false, true, false])}>
                <FontAwesomeIcon icon={faClock} size="lg"/>
                <div>Періоди</div>
            </div>
            <div className={`tab ${props.tabs[2] && 'current'}`} onClick={props.changeTab.bind(null, [false, false, true])}>
                <FontAwesomeIcon icon={faPlay} size="lg"/>
                <div>Результат</div>
            </div>
        </div>
    )
};

export default MobileTabs;