import React from 'react';
import ReactDOM from 'react-dom';

import Stopwatch from './Stopwatch';

class StopwatchContainer extends React.PureComponent {
    state = {
        isStopwatchDisplayed: true
    };

    handleStopwatchDisplayToggle = () => {
        this.setState((prevState) => ({
            ...prevState,
            isStopwatchDisplayed: !prevState.isStopwatchDisplayed
        }));
    };

    render() {
        const { isStopwatchDisplayed } = this.state;
        let stopwatch;
        if (isStopwatchDisplayed) {
            stopwatch = (
                <Stopwatch>
                    <Stopwatch.Laps className="stopwatch__label" />
                    <Stopwatch.Time className="stopwatch__label" />
                    {/* <div className="stopwatch__buttons" /> */}
                    <Stopwatch.LapButton className="stopwatch__button" />
                    <Stopwatch.RunButton className="stopwatch__button" />
                    <Stopwatch.ClearButton className="stopwatch__button" />
                </Stopwatch>
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

ReactDOM.render(
    <StopwatchContainer isStopwatchEnabled />,
    document.getElementById('root')
);