import React from 'react';
import Stopwatch from './Stopwatch';
import { withLaps } from './StopwatchLaps';
import getTimeString from './helper';

function MyLaps({ laps, className }) {
    return (
        <ul className={className}>
            {
                laps.map((lapTime, index) => {
                    return (
                        <li key={lapTime}>{getTimeString(lapTime)}</li>
                    );
                })
            }
        </ul>
    );
}

const MyLapsWrapper = withLaps(MyLaps);

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
                    <div className="stopwatch__buttons">
                        <Stopwatch.LapButton className="stopwatch__button" />
                        <Stopwatch.RunButton className="stopwatch__button" />
                        <Stopwatch.ClearButton className="stopwatch__button" />
                    </div>
                    {/* <MyLapsWrapper /> */}
                </Stopwatch >
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