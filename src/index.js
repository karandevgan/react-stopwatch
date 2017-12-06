import React from 'react';
import ReactDOM from 'react-dom';

import Stopwatch from './Stopwatch';

class StopwatchContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isStopwatchDisplayed: true
        };
        this.handleStopwatchDisplayToggle = this.handleStopwatchDisplayToggle.bind(this);
    }

    handleStopwatchDisplayToggle() {
        this.setState((prevState) => ({
            ...prevState,
            isStopwatchDisplayed: !prevState.isStopwatchDisplayed
        }));
    }

    render() {
        const { isStopwatchDisplayed } = this.state;
        let stopwatch;
        if (isStopwatchDisplayed) {
            stopwatch = (<Stopwatch />);
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