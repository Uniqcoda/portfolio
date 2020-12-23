import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Header() {
	function openMenu() {
		let x = document.getElementById('sidebar');
		if (x.className === 'sidebar close') {
			x.className = 'sidebar';
		}
	}

	function scrollToSection(id) {
		document.getElementById(id).scrollIntoView();
	}

	return (
		<div className='header'>
			<div className='brand'>
				<Link to='/'><img src="/images/logo.png" alt="logo"/></Link>
			</div>
			<div className='header-links' id='my-links'>
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
				<Link to='#' className='icon' onClick={openMenu}>
					<i className='fas fa-bars'></i>
				</Link>
			</div>
		</div>
	);
}
