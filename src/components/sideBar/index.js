import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function SideBar() {
	function closeMenu() {
		let x = document.getElementById('sidebar');
		if (x.className === 'sidebar') {
			x.className = `${x.className} close`;
		}
	}
	return (
		<div id='sidebar' className='sidebar close'>
			<div className='icon'>
				<Link to='#' onClick={closeMenu}>
					<i className='fas fa-times'></i>
				</Link>
			</div>
			<div className='sidebar-links' id='my-links'>
				<Link to='/#about'>About</Link>
				<Link to='/#contact'>Contact</Link>
				<Link to='/#work'>Work</Link>
				<Link to='/#tools'>Tools</Link>
				<Link to='/#projects'>Projects</Link>
			</div>
		</div>
	);
}
