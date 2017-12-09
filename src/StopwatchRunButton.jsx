import React from 'react';

class StopwatchRunButton extends React.PureComponent {
    focus = () => {
        this.btn.focus();
    };
    
    render() {
        const { stopWatchContext: { handleRunClick, isRunning }, className } = this.props;
        return (
            <button
                ref={(btn) => this.btn = btn}
                onClick={handleRunClick}
                className={className}
            >
                {!isRunning ? 'Start' : 'Stop'}
            </button>
        );
    }
}

export default StopwatchRunButton;