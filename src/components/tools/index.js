import React, { useEffect, useState } from 'react';
import './style.scss';

export default function Tools() {
	const [, setAutoSlide] = useState(false);
	const imageCarousel = document.getElementById('image');

	function slideRight() {
		imageCarousel.className = 'image-carousel last';
	}

	function slideLeft() {
		imageCarousel.className = 'image-carousel initial';
	}
	// if (autoSlide) setInterval(slider, 2000);

	useEffect(() => {
		setAutoSlide(true);
	}, []);

	return (
		<div id='tools' className='tools'>
			<h2>Some tools I work with:</h2>
			<div className='carousel'>
				<div className='image-carousel initial' id='image'>
					<img src='/images/node.png' alt='node' />
					<img src='/images/react.png' alt='react' />
					<img src='/images/typescript.png' alt='typescript' />
					<img src='/images/jest.png' alt='jest' />
					<img src='/images/graphql.png' alt='graphql' />
					<img src='/images/mongodb.jpeg' alt='mongodb' />
					<img src='/images/bootstrap.png' alt='bootstrap' />
					<img src='/images/semanticui.png' alt='semanticui' />
					<img src='/images/wordpress.png' alt='wordpress' />
				</div>
				<div className='mobile-chevron'>
					<i className='fas fa-chevron-circle-left' onClick={slideLeft}></i>
					<i className='fas fa-chevron-circle-right' onClick={slideRight}></i>
				</div>
			</div>

			<div id='contact' className='contact-section'>
				<h2>Get in touch!</h2>
				<div className='contact-details'>
					<div className='contact'>
						<i className='fas fa-envelope'></i>
						etokwudomary@gmail.com
					</div>
					<div className='contact'>
						<i className='fas fa-phone'></i>
						+2348067190580
					</div>
					<div className='contact'>
						<i className='fab fa-github'></i>
						https://github.com/Uniqcoda
					</div>
				</div>
				<div className='social-media'>
					<a className='facebook' href='https://web.facebook.com/ecmary'>
						<img src='/images/facebook.jpg' alt='facebook' />
					</a>
					<a className='twitter' href='https://twitter.com/uniqcoda'>
						<img src='/images/twitter.png' alt='twitter' />
					</a>
					<a
						className='linkedin'
						href='https://www.linkedin.com/in/mary-etokwudo-972b0983/'
					>
						<img src='/images/linkedin.png' alt='linkedin' />
					</a>
					<a className='github' href='https://github.com/Uniqcoda'>
						<img src='/images/github.png' alt='github' />
					</a>
				</div>
			</div>
		</div>
	);
}
