import React from 'react';

function StopwatchLapButton(props) {
    const { handleLapClick, isRunning, ...remProps } = props;

    return (
        <button
            onClick={handleLapClick}
            disabled={!isRunning}
            {...remProps}
        >
            Lap
        </button>
    );
}

export default StopwatchLapButton;
