import React, { useEffect } from 'react';
import './style.scss';

export default function Loader() {
	useEffect(() => {
		setTimeout(() => {
			document.querySelector('body').classList.add('display');
		}, 4000);
	}, []);

	return (
		<div className='spinner-container'>
			<div className='circles'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
