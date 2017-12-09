import React from 'react';
import PropTypes from 'prop-types';
import getTimeString from './helper';
import STOPWATCH_CONTEXT from './context';

function StopwatchLaps(props, context) {
    const { laps } = context[STOPWATCH_CONTEXT];
    return (
        laps.map((lapTime, index) => {
            return (
                <div key={lapTime} {...props}>
                    <label>{`Lap ${index + 1}:`} {getTimeString(lapTime)}</label>
                </div>
            )
        })
    );
}

StopwatchLaps.contextTypes = {
    [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
};

export default StopwatchLaps;