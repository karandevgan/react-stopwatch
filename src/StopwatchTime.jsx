import React from 'react';
import getTimeString from './helper';

function StopwatchTime(props, context) {
    const { time, ...remProps } = props;
    return (
        <div {...remProps}>
            <label>{getTimeString(time)}</label>
        </div>
    );
}

export default StopwatchTime;