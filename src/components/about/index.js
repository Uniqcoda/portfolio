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
						solutions by applying up-to-date technologies and industry best
						practices. She has worked with both small and large teams in global
						organizations and is dedicated to her job.
					</p>
					<p>
						She started her programming journey as a fullstack web developer and has spent a lot of her time on the backend. She is currently looking out for fullstack roles in order to explore her frontend skills.
					</p>
					<p>Mary is a great cook who also loves visiting new places.</p>
				</div>
			</div>
		</div>
	);
}
