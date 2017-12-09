import React from 'react';
import getTimeString from './helper';

function StopwatchLaps({ laps, ...remProps }) {
    return (
        laps.map((lapTime, index) => {
            return (
                <div key={lapTime} {...remProps}>
                    <label>{`Lap ${index + 1}:`} {getTimeString(lapTime)}</label>
                </div>
            )
        })
    );
}

export default StopwatchLaps;