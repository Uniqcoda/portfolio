import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Header() {
	function openMenu() {
		let x = document.getElementById('my-links');
		if (x.className === 'header-links') {
			x.className += ' responsive';
		}
	}
	return (
		<div id='top' className='header'>
			<div className='brand'>
				<Link to='/'>Home</Link>
			</div>
			<div className='header-links' id='my-links'>
				<Link to='/#about'>About</Link>
				<Link to='/#contact'>Contact</Link>
				<Link to='/#work'>Work</Link>
				<Link to='/#tools'>Tools</Link>
				<Link to='/#projects'>Projects</Link>
				<Link to='javascript:void(0);' className='icon' onClick={openMenu}>
					<i className='fas fa-bars'></i> Menu
				</Link>
			</div>
		</div>
	);
}
