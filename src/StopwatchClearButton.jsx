import React from 'react';

function StopwatchClearButton(props) {
    const { handleClearClick, ...remProps } = props;

    return (
        <button
            onClick={handleClearClick}
            {...remProps}
        >
            Clear
        </button>
    );
}

export default StopwatchClearButton;