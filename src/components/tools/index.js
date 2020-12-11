import React from 'react';
import './style.scss';

export default function Tools() {
	return (
		<div className='tools'>
			<h2>Some tools I work with:</h2>
			<p>carousel</p>
			<h2>Get in touch!</h2>
			<div className='contact-details'>
				<div className='contact'>
					<i class='fas fa-envelope'></i>
					<p>etokwudomary@gmail.com</p>
				</div>
				<div className='contact'>
					<i class='fas fa-phone'></i>
					<p>08067190580</p>
				</div>
				<div className='contact'>
					<i class='fab fa-github'></i>
					<p>https://github.com/Uniqcoda</p>
				</div>
			</div>
			<div className='social-media'>
      <a className='facebook' href='https://web.facebook.com/ecmary'>
					<img src="/images/facebook.jpg" alt="facebook" />
				</a>
        <a className='twitter' href='https://twitter.com/uniqcoda'>
        <img src="/images/twitter.png" alt="twitter" />
				</a>
        <a className='linkedin' href='https://www.linkedin.com/in/mary-etokwudo-972b0983/'>
        <img src="/images/linkedin.png" alt="linkedin" />
				</a>
        <a className='github' href='https://github.com/Uniqcoda'>
        <img src="/images/github.png" alt="github" />
				</a>
			</div>
		</div>
	);
}

// import Slider from 'react-slick';

// export default function SimpleSlider() {
// 	var settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 	};
// 	return (
// 		<Slider {...settings}>
// 			<div>
// 				<img src='http://placekitten.com/g/400/200' />
// 			</div>
// 			<div>
// 				<img src='http://placekitten.com/g/400/200' />
// 			</div>
// 			<div>
// 				<img src='http://placekitten.com/g/400/200' />
// 			</div>
// 			<div>
// 				<img src='http://placekitten.com/g/400/200' />
// 			</div>
// 		</Slider>
// 	);
// }
