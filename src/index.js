import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
	
    incrementCount = () => {
		this.setState(
            { count: this.state.count + 1 }
        );
	};

	decrementCount = () => {
		this.setState(
			{ count: this.state.count - 1 }
			)
	}
	
    render() {
        return (
            <h1>
            	<button onClick={ this.incrementCount }>Up</button>
            	<button onClick={ this.decrementCount }>Down</button>
				Clicks: { this.state.count }
			</h1>
        );
    }
}

ReactDOM.render(
	<Counter/>, 
	document.body
);
// create a counter, two buttons, when page load display 0 , increment by oe decrement by one.
