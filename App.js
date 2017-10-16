import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'

var destination = document.querySelector('#root');

class App extends React.Component {
	render() {
		return(
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}
console.log('this component loaded');

ReactDOM.render(
	<App />,
	destination
);