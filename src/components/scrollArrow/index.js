import React, { useState } from 'react';

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.scrollY > 500) {
			setShowScroll(true);
		} else if (showScroll && window.scrollY <= 500) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<div
			className='scroll-to-top'
			onClick={scrollTop}
			style={{ display: showScroll ? 'flex' : 'none' }}
		>
			<i className='fas fa-arrow-up'></i>
			<span className='tool-tip-text'>Scroll to top</span>
		</div>
	);
};

export default ScrollArrow;
