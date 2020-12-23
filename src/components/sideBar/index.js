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

	function scrollToSection(id) {
		document.getElementById(id).scrollIntoView();
	}

	return (
		<div id='sidebar' className='sidebar close'>
			<div className='icon'>
				<Link to='#' onClick={closeMenu}>
					<i className='fas fa-times'></i>
				</Link>
			</div>
			<div className='sidebar-links' id='my-links'>
				<Link to='#about' onClick={(e) => scrollToSection('about', e)}>
					About
				</Link>
				<Link to='#contact' onClick={(e) => scrollToSection('contact', e)}>
					Contact
				</Link>
				<Link to='#work' onClick={(e) => scrollToSection('work', e)}>
					Work
				</Link>
				<Link to='#tools' onClick={(e) => scrollToSection('tools', e)}>
					Tools
				</Link>
				<Link to='#projects' onClick={(e) => scrollToSection('projects', e)}>
					Projects
				</Link>
			</div>
		</div>
	);
}
