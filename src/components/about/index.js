import React from 'react';
import './style.css';

export default function About() {
	return (
		<div className='section'>
			<h2>About</h2>
			<hr />
			<div className='about-card'>
				<div className='about-card-image'>
					<img src='/images/profile_image.jpg' alt='decagon logo' />
				</div>
				<div className='about-card-text'>
					<h4>Mary Etokwudo</h4>
					<p>
						A versatile tech enthusiast experienced in building world class
						technologies and web solutions by applying up-to-date tools and
						industry best practices. Has worked with both small and large teams
						in global organisations and is dedicated to her job.
					</p>
					<p>
						She started her programming journey with frontend web development
						using HTML, CSS and JavaScript but has since added Node, Python and
						PHP to the list.
					</p>
					<p>She is also a song-writer and a great cook.</p>
				</div>
			</div>
			<div className='language-progress'>
				<progress value='90' max='100'>
					JavaScript
				</progress>
				<progress value='70' max='100'>
					JavaScript
				</progress>
				<progress value='70' max='100'>
					JavaScript
				</progress>
			</div>
		</div>
	);
}
