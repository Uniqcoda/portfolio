import React from 'react';
import './style.scss';

export default function About() {
	return (
		<div id='about' className='section'>
			<h2>About</h2>
			<hr />
			<div className='about-card'>
				<div className='about-card-image'>
					<img loading='lazy' src='/images/profile_image.png' alt='profile' />
				</div>
				<div className='about-card-text'>
					<h4>Mary Etokwudo</h4>
					<p>
						A versatile tech enthusiast experienced in building world class web
						solutions by applying up-to-date technologies and industry best
						practices. She has worked with both small and large teams in global
						organizations and is dedicated to her job.
					</p>
					<p>
						She started her programming journey as a fullstack web developer,
						spends most of her time on the backend and is currently adding
						blockchain technology to her list of technical skills.
					</p>
					<p>She is a great cook and she loves visiting new places.</p>
				</div>
			</div>
		</div>
	);
}
