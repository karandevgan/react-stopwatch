import React from 'react';

class StopwatchRunButton extends React.PureComponent {
    focus = () => {
        this.btn.focus();
    };

    render() {
        const { handleRunClick, isRunning, ...remProps } = this.props;
        return (
            <button
                ref={(btn) => this.btn = btn}
                onClick={handleRunClick}
                {...remProps}
            >
                {!isRunning ? 'Start' : 'Stop'}
            </button>
        );
    }
}

export default StopwatchRunButton;