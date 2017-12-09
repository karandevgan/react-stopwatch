import React from 'react';
import PropTypes from 'prop-types';
import getTimeString from './helper';
import STOPWATCH_CONTEXT from './context';

function StopwatchTime(props, context) {
    const { time } = context[STOPWATCH_CONTEXT];
    return (
        <div {...props}>
            <label>{getTimeString(time)}</label>
        </div>
    );
}

StopwatchTime.contextTypes = {
    [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
};

export default StopwatchTime;