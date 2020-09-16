import React from 'react';
import './style.css';

export default function Projects() {
	return (
		<div className='projects'>
			<h2>Let's build your ideas together...</h2>
      <hr/>
			<div className='project-cards'>
				<div className='card'>
					<h3>Color Game</h3>
					<hr />
					<div className='card-image'>
						<img src='/images/color_game.png' alt='color-game' />
					</div>
					<p>A color guessing game built with HTML, JS and CSS</p>
				</div>
				<div className='card'>
					<h3>Color Game</h3>
					<hr />
					<div className='card-image'>
						<img src='/images/color_game.png' alt='color-game' />
					</div>
					<p>A sample platform where parents can find private tutors for their children. Built with React, SemanticUI, GraphQL, NodeJS and MongoDB</p>
				</div>
				<div className='card'>
					<h3>Color Game</h3>
					<hr />
					<div className='card-image'>
						<img src='/images/color_game.png' alt='color-game' />
					</div>
					<p>A color guessing game built with HTML, JS and CSS</p>
				</div>
			</div>
		</div>
	);
}
