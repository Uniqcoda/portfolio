import React from 'react';
import './style.scss';

// TODO add lazy loading attributes to images
export default function Projects() {
	return (
		<div id='projects' className='section'>
			<h2>Let's build your ideas together...</h2>
			<div className='project-cards'>
				<div className='card'>
					<h3>Color Game</h3>
					<hr />
					<div className='card-image'>
						<a href='https://uniqcoda.github.io/Color-Game/'>
							<img src='/images/color_game.png' alt='tutor-finder-app' />
						</a>
					</div>
					<p>A color guessing game built with HTML, JS and CSS</p>
				</div>
				<div className='card'>
					<h3>Tutor Finder</h3>
					<hr />
					<div className='card-image'>
						<a href='#'>
							<img src='/images/upthrust.png' alt='tutor-finder-app' />
						</a>
					</div>
					<p>
						A platform where parents can find private tutors for their children.
						Built with React, SemanticUI, GraphQL, NodeJS and MongoDB.
					</p>
				</div>
				<div className='card'>
					<h3>Poll Platform</h3>
					<hr />
					<div className='card-image'>
						<a href='#'>
							<img src='/images/poll.png' alt='poll-app' />
						</a>
					</div>
					<p>
						A platform where polls can be taken and results cumulated. Built with Django.
					</p>
				</div>
			</div>
		</div>
	);
}
