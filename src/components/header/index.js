import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
	return (
		<div className='header'>
			<div className='brand'>
				<Link to='/'>Home</Link>
			</div>
			<div className='header-links'>
				<Link to='/#about'>About</Link>
				<Link to='/#contact'>Contact</Link>
				<Link to='/#work'>Work</Link>
				<Link to='/#tools'>Tools</Link>
				<Link to='/#projects'>Projects</Link>
			</div>
		</div>
	);
}
