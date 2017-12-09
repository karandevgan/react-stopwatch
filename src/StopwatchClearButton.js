import React from 'react';
import PropTypes from 'prop-types';
import STOPWATCH_CONTEXT from './context';

function StopwatchClearButton(props, context) {
    const {handleClearClick} = context[STOPWATCH_CONTEXT];
    
    return (
        <button
            onClick={handleClearClick}
            {...props}
        >
            Clear
        </button>
    );
}

StopwatchClearButton.contextTypes = {
    [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
};

export default StopwatchClearButton;