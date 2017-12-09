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
    static Laps = withStopwatch(StopwatchLaps);
    static Time = withStopwatch(StopwatchTime);
    static LapButton = withStopwatch(StopwatchLapButton);
    static RunButton = withStopwatch(StopwatchRunButton);
    static ClearButton = withStopwatch(StopwatchClearButton);
    static childContextTypes = {
        [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
    };

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

    getChildContext() {
        const { time, isRunning, laps } = this.state;
        return {
            [STOPWATCH_CONTEXT]: {
                laps,
                time,
                isRunning,
                handleLapClick: this.handleLapClick,
                handleRunClick: this.handleRunClick,
                handleClearClick: this.handleClearClick,
            }
        };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function withStopwatch(Component) {
    function Wrapper(props, context) {
        const stopwatchContext = context[STOPWATCH_CONTEXT];
        return (
            <Component {...stopwatchContext} {...props} />
        );
    }

    Wrapper.contextTypes = {
        [STOPWATCH_CONTEXT]: PropTypes.object.isRequired,
    };

    return Wrapper;
}

export default Stopwatch;
export {withStopwatch};