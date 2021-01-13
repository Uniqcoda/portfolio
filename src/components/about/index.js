import React from 'react';
import './style.scss';

export default function About() {
	return (
		<div id='about' className='section'>
			<h2>About</h2>
			<hr />
			<div className='about-card'>
				<div className='about-card-image'>
					<img loading='lazy' src='/images/profile_image.jpg' alt='profile' />
				</div>
				<div className='about-card-text'>
					<h4>Mary Etokwudo</h4>
					<p>
						A versatile tech enthusiast experienced in building world class web
						solutions by applying up-to-date technologies and industry best practices.
						She has worked with both small and large teams in global organisations
						and is dedicated to her job.
					</p>
					<p>
						She started her programming journey with frontend web development
						but currently writes backend code as well.
					</p>
					<p>She is also a song-writer and a great cook.</p>
				</div>
			</div>
		</div>
	);
}
