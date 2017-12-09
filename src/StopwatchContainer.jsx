import React from 'react';
import Stopwatch from './Stopwatch';

class StopwatchContainer extends React.PureComponent {
    state = {
        isStopwatchDisplayed: true
    };

    renderLaps = ({ laps }) => {
        return (
            <Stopwatch.Laps laps={laps} className="stopwatch__label" />
        );
    }

    renderTime = ({ time }) => {
        return (
            <Stopwatch.Time time={time} className="stopwatch__label" />
        );
    }

    renderButtons = ({ handleLapClick, handleRunClick, handleClearClick, isRunning }) => {
        return (
            <div className="stopwatch__buttons">
                <Stopwatch.LapButton
                    handleLapClick={handleLapClick}
                    isRunning={isRunning}
                    className="stopwatch__button"
                />
                <Stopwatch.RunButton
                    handleRunClick={handleRunClick}
                    isRunning={isRunning}
                    ref={(runBtn) => this.runBtn = runBtn}
                    className="stopwatch__button"
                />
                <Stopwatch.ClearButton
                    handleClearClick={handleClearClick}
                    className="stopwatch__button"
                />
            </div>
        );
    }

    handleStopwatchDisplayToggle = () => {
        this.setState((prevState) => ({
            ...prevState,
            isStopwatchDisplayed: !prevState.isStopwatchDisplayed
        }));
    };

    componentDidMount() {
        this.runBtn.focus();
    }

    render() {
        const { isStopwatchDisplayed } = this.state;
        let stopwatch;
        if (isStopwatchDisplayed) {
            stopwatch = (
                <Stopwatch
                    renderLaps={this.renderLaps}
                    renderTime={this.renderTime}
                    renderButtons={this.renderButtons}
                />
            );
        } else {
            stopwatch = null;
        }
        return (
            <div>
                <label>
                    Show Stopwatch?
                    <input
                        type="checkbox"
                        checked={isStopwatchDisplayed}
                        onChange={this.handleStopwatchDisplayToggle} />
                </label>
                <hr />
                {stopwatch}
            </div>
        );
    }
}

export default StopwatchContainer;