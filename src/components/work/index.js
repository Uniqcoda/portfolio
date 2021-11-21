import React from 'react';
import './style.scss';

export default function Work() {
	return (
		<div id='work' className='section'>
			<h3>Work</h3>
			<hr />
			<div className='work-cards'>
				<div className='work-card'>
					<div className='work-card-image'>
						<a href='https://decagonhq.com/'>
							<img
								loading='lazy'
								src='/images/decagon.jpg'
								alt='decagon logo'
							/>
						</a>
					</div>
					<div className='work-card-text'>
						<h4>Decagon</h4>
						<p>
							Decagon is a world-class software engineering institute with a
							talent pipeline of exceptional software engineers.
						</p>
						<p>
							I started working here in March 2019 as full-stack software
							engineer and currently, as a technical lead.
						</p>
					</div>
				</div>
				<div className='work-card'>
					<div className='work-card-image'>
						<a href='https://www.alerzo.com/'>
							<img loading='lazy' src='/images/alerzo.jpeg' alt='alerzo logo' />
						</a>
					</div>
					<div className='work-card-text'>
						<h4>Alerzo</h4>
						<p>
							Alerzo is a B2B e-commerce retail company providing a platform
							that transforms how informal retail stores operate.
						</p>
						<p>
							I worked here in 2021 as a backend software engineer, contributing
							to the e-commerce platform of organization.
						</p>
					</div>
				</div>
				<div className='work-card'>
					<div className='work-card-image'>
						<a href='https://okra.ng/'>
							<img loading='lazy' src='/images/okra.png' alt='okra logo' />
						</a>
					</div>
					<div className='work-card-text'>
						<h4>Okra.ng</h4>

						<p>
							Okra is a fin-tech company that provides real-time consumer data
							between applications and banking institutions.
						</p>
						<p>
							I worked here in 2019 as a full-stack software engineer,
							contributing to the various websites and applications used and
							released by the company.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
