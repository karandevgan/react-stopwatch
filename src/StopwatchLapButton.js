import React from 'react';

function StopwatchLapButton(props) {
    const { handleLapClick, isRunning, className } = props;

    return (
        <button
            onClick={handleLapClick}
            disabled={!isRunning}
            className={className}
        >
            Lap
        </button>
    );
}

export default StopwatchLapButton;
