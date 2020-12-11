import React from 'react';
import './style.scss';

export default function Work() {
	return (
		<div className='section'>
			<h3>Work</h3>
			<hr />
			<div className='work-cards'>
				<div className='work-card'>
					<div className='work-card-image'>
						<img src='/images/decagon.jpg' alt='decagon logo' />
					</div>
					<div className='work-card-text'>
						<h4>Decagon Institute</h4>
						<p>
							Decagon Institute is a world-class software engineering institute
							with a talent pipeline of exceptional software engineers.
						</p>
						<p>
							I started working here in January 2020 as full-stack software
							engineer and as a technical lead.
						</p>
					</div>
				</div>
				<div className='work-card'>
					<div className='work-card-image'>
						<img src='/images/okra.png' alt='okra logo' />
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
