import React, { useEffect, useState } from 'react';
import './style.scss';

export default function Tools() {
	const images = [
		'bootstrap.png',
		'graphql.png',
		'jest.png',
		'mongodb.jpeg',
		'node.png',
		'react.png',
		'semanticui.png',
		'wordpress.png',
	];
	const [autoSlide, setAutoSlide] = useState(false);
	const [counter, setCounter] = useState(images.length);
	const imageCarousel = document.getElementById('image');
	function slider() {
		// if (counter < images.length) {
		// 	setCounter(counter + 1);
		// } else {
		// 	setCounter(1);
		// }
		console.log(counter);

		imageCarousel.innerHTML = `
        <img src='/images/${images[counter - 1]}' alt='react' />
        <img src='/images/${images[counter - 2]}' alt='boot' />
        <img src='/images/${images[counter - 3]}' alt='sddsdd' />
        <img src='/images/${images[counter - 4]}' alt='sdsd' />
    `;
	}
	function slideRight() {
		if (counter === images.length) {
			setCounter(counter - 1);
		} else if (counter > 0 && counter < images.length) {
			setCounter(counter - 1);
		} else {
			setCounter(images.length);
		}
		slider();
	}

	function slideLeft() {
		slider();
		if (counter < images.length) {
			setCounter(counter + 1);
		} else {
			setCounter(0);
		}
	}
	// if (autoSlide) setInterval(slider, 2000);

	useEffect(() => {
		setAutoSlide(true);
	}, []);

	return (
		<div id='tools' className='tools'>
			<h2>Some tools I work with:</h2>
			<div className='carousel'>
				<i className='fas fa-chevron-left' onClick={slideLeft}></i>
				<div className='image-carousel' id='image'></div>
				<i className='fas fa-chevron-right' onClick={slideRight}></i>
			</div>

			<h2 id='contact'>Get in touch!</h2>
			<div className='contact-details'>
				<div className='contact'>
					<i className='fas fa-envelope'></i>
					etokwudomary@gmail.com
				</div>
				<div className='contact'>
					<i className='fas fa-phone'></i>
					08067190580
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
	);
}
