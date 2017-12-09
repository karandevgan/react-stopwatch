import React from 'react';
import PropTypes from 'prop-types';
import STOPWATCH_CONTEXT from './context';
import StopwatchLaps from './StopwatchLaps';
import StopwatchTime from './StopwatchTime';
import StopwatchLapButton from './StopwatchLapButton';
import StopwatchRunButton from './StopwatchRunButton';
import StopwatchClearButton from './StopwatchClearButton';
import './Stopwatch.css';

class Stopwatch extends React.PureComponent {
    static Laps = StopwatchLaps;
    static Time = StopwatchTime;
    static LapButton = StopwatchLapButton;
    static RunButton = StopwatchRunButton;
    static ClearButton = StopwatchClearButton;

    state = {
        laps: [],
        time: 0,
        isRunning: false
    };

    handleLapClick = (event) => {
        const lapTime = this.state.time;
        this.setState((prevState) => ({
            laps: [...prevState.laps, lapTime]
        }));
    };

    handleRunClick = (event) => {
        const prevState = this.state;
        if (prevState.isRunning) {
            clearInterval(this.timer);
        } else {
            const startTime = Date.now() - prevState.time;
            this.timer = setInterval(() => {
                this.setState((state) => ({
                    time: Date.now() - startTime,
                    isRunning: true
                }));
            });
        }
        this.setState((prevState) => ({ isRunning: !prevState.isRunning }));
    };

    handleClearClick = (event) => {
        clearInterval(this.timer);
        this.setState((prevState) => ({ time: 0, laps: [], isRunning: false }));
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {this.props.renderLaps({ laps: this.state.laps })}
                {this.props.renderTime({ time: this.state.time })}
                {this.props.renderButtons({
                    isRunning: this.state.isRunning,
                    handleLapClick: this.handleLapClick,
                    handleRunClick: this.handleRunClick,
                    handleClearClick: this.handleClearClick
                })}
            </div>
        );
    }
}

export default Stopwatch;