import React from 'react';
import PropTypes from 'prop-types';
import STOPWATCH_CONTEXT from './context';

function StopwatchRunButton(props, context) {
    const { handleRunClick, isRunning } = context[STOPWATCH_CONTEXT];

    return (
        <button
            onClick={handleRunClick}
            {...props}
        >
            {!isRunning ? 'Start' : 'Stop'}
        </button>
    );
}

StopwatchRunButton.contextTypes = {
    [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
};

export default StopwatchRunButton;