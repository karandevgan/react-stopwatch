import React from 'react';
import getTimeString from './helper';

function StopwatchLaps({ laps, className }) {
    return (
        laps.map((lapTime, index) => {
            return (
                <div key={lapTime} className={className}>
                    <label>{`Lap ${index + 1}:`} {getTimeString(lapTime)}</label>
                </div>
            )
        })
    );
}

export default StopwatchLaps;