import React from 'react';
import './Stopwatch.css';

const millisecondsIn = {
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000
};

const getTimePart = function getTimePartFunction(milliseconds, part) {
    if (
        milliseconds === null
        || milliseconds === undefined
        || Number.isNaN(parseInt(milliseconds, 10))
    ) {
        return null;
    }
    return Math.floor(milliseconds / millisecondsIn[part]);
};

const padString = function padStringFunction(str, padCharacter, length) {
    if (str === null || str === undefined) {
        return null;
    }
    const safeStr = String(str);
    if (safeStr.length >= length) {
        return safeStr;
    }
    const padArray = new Array(length).fill(padCharacter).join('');
    const returnString = padArray.substr(0, length - safeStr.length).concat(safeStr);
    return returnString;
};

const getTimeString = function getTimeStringFunction(milliseconds) {
    if (
        milliseconds === null
        || milliseconds === undefined
        || Number.isNaN(parseInt(milliseconds, 10))
    ) {
        return null;
    }
    let remainingMilliseconds = milliseconds;
    const hours = getTimePart(remainingMilliseconds, 'hours');
    remainingMilliseconds -= hours * millisecondsIn.hours;
    const minutes = getTimePart(remainingMilliseconds, 'minutes');
    remainingMilliseconds -= minutes * millisecondsIn.minutes;
    const seconds = getTimePart(remainingMilliseconds, 'seconds');
    remainingMilliseconds -= seconds * millisecondsIn.seconds;
    return `${padString(hours, '0', 2)}:${padString(minutes, '0', 2)}:${padString(seconds, '0', 2)}:${padString(remainingMilliseconds, '0', 3)}`;
};


class Stopwatch extends React.PureComponent {
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
        const { time, isRunning } = this.state;
        return (
            <div>
                {
                    this.state.laps.map((lapTime, index) => {
                        return (
                            <div key={lapTime} className="stopwatch__label">
                                <label>{`Lap ${index + 1}:`} {getTimeString(lapTime)}</label>
                            </div>
                        )
                    })
                }
                <div className="stopwatch__label">
                    <label>{getTimeString(time)}</label>
                </div>
                <div className="stopwatch__buttons">
                    <button
                        className="stopwatch__button"
                        onClick={this.handleLapClick}
                        disabled={!isRunning}>
                        Lap
                    </button>
                    <button
                        className="stopwatch__button"
                        onClick={this.handleRunClick}>
                        {!isRunning ? 'Start' : 'Stop'}
                    </button>
                    <button
                        className="stopwatch__button"
                        onClick={this.handleClearClick}>
                        Clear
                    </button>
                </div>
            </div>
        );
    }
}

export default Stopwatch;