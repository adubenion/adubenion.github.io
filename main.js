import { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {App} from './js/App';

var destination = document.querySelector('#app');

ReactDOM.render(
	<App />,
	destination
);