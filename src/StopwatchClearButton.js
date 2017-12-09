import React from 'react';

function StopwatchClearButton(props) {
    const { stopWatchContext: { handleClearClick }, className } = props;

    return (
        <button
            onClick={handleClearClick}
            className={className}
        >
            Clear
        </button>
    );
}

export default StopwatchClearButton;