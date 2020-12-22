import React from 'react';
import Header from '../header';
import SideBar from '../sideBar';
import './style.scss';

export default function Banner() {
	return (
		<div className='banner'>
			<Header></Header>
			<SideBar></SideBar>
			<div className='centered'>
				<div className='bg-light'>Hey, I'm</div>
				<div className='bg-dark'>Mary.</div>

				<button className='about-button'>
					About <i className='fas fa-chevron-down'></i>
				</button>
			</div>
		</div>
	);
}
