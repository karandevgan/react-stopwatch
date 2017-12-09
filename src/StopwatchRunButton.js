import React from 'react';

function StopwatchRunButton(props) {
    const { stopWatchContext: { handleRunClick, isRunning }, className } = props;

    return (
        <button
            onClick={handleRunClick}
            className={className}
        >
            {!isRunning ? 'Start' : 'Stop'}
        </button>
    );
}

export default StopwatchRunButton;