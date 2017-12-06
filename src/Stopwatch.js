import React from 'react';
import './Stopwatch.css';

class Stopwatch extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isRunning: false
        };
        this.handleRunClick = this.handleRunClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    handleRunClick(event) {
        const prevState = this.state;
        if (prevState.isRunning) {
            clearInterval(this.timer);
        } else {
            const startTime = Date.now() - prevState.time;
            this.timer = setInterval(() => {
                this.setState({
                    ...prevState,
                    time: Date.now() - startTime,
                    isRunning: true
                });
            });
        }
        this.setState((prevState) => ({ ...prevState, isRunning: !prevState.isRunning }));
    }

    handleClearClick(event) {
        clearInterval(this.timer);
        this.setState((prevState) => ({ ...prevState, time: 0, isRunning: false }));
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { time, isRunning } = this.state;
        return (
            <div>
                <div className="stopwatch__label">
                    <label>{time} ms</label>
                </div>
                <div className="stopwatch__buttons">
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