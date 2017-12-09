import React from 'react';
import PropTypes from 'prop-types';
import STOPWATCH_CONTEXT from './context';

function StopwatchLapButton(props, context) {
    const {handleLapClick, isRunning} = context[STOPWATCH_CONTEXT];

    return (
        <button
            onClick={handleLapClick}
            disabled={!isRunning}
            {...props}
        >
            Lap
        </button>
    );
}

StopwatchLapButton.contextTypes = {
    [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
};

export default StopwatchLapButton;
