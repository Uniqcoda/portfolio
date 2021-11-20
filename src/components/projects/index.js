import React from 'react';
import './style.scss';

// TODO add lazy loading attributes to images
export default function Projects() {
	return (
		<div id='projects' className='section'>
			<h2>Let's build your ideas together...</h2>
			<div className='project-cards'>
            <div className='card'>
					<h3>Resume Builder</h3>
					<hr />
					<div className='card-image'>
						<a href='https://www.resume.com/'>
							<img loading='lazy' src='/images/resumecom.jpg' alt='resume-builder' />
						</a>
					</div>
					<p>
						A platform for building resumes and cover-letters. I worked mostly with the backend team. Tech-stack includes, Node, Javascript, React, Typescript, GraphQL, MongoDB, gRPC, and Jest using the microservices architecture.
					</p>
				</div>
				<div className='card'>
					<h3>Color Game</h3>
					<hr />
					<div className='card-image'>
						<a href='https://uniqcoda.github.io/Color-Game/'>
							<img loading='lazy' src='/images/color_game.png' alt='color game' />
						</a>
					</div>
					<p>A color guessing game built with HTML, JS and CSS. This is one of my first projects as a developer.</p>
				</div>
				<div className='card'>
					<h3>Invest City</h3>
					<hr />
					<div className='card-image'>
						<a href='https://uniqcoda.github.io/invest-city/'>
							<img loading='lazy' src='/images/investcity.jpg' alt='investment platform' />
						</a>
					</div>
					<p>
						A platform that helps you make investment decisions in various sectors like agriculture and real estate. Built with HTML, CSS, and JavaScript.
					</p>
				</div>
			</div>
		</div>
	);
}
