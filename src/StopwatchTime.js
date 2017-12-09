import React from 'react';
import getTimeString from './helper';

function StopwatchTime(props, context) {
    const { time, className } = props;
    return (
        <div className={className}>
            <label>{getTimeString(time)}</label>
        </div>
    );
}

export default StopwatchTime;