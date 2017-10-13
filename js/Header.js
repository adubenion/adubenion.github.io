import React from 'react';
import {Link} from 'react-router-dom'

export class Header extends React.Component {
	render() {
		return (
			<div>
				<nav><Link to="/">Home</Link> | <Link to="/About">About</Link> | <Link to="/Contact">Contact</Link></nav>
			</div>
		);
	}
}