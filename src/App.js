import React from 'react';
import './App.scss';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Tools from './components/tools';
import Work from './components/work';
import Banner from './components/banner';
import ScrollArrow from './components/scrollArrow';

function App() {
	return (
		<div className='App'>
			<div className='grid-container'>
				<div className='main'>
					<Banner></Banner>
					<Projects></Projects>
					<Work></Work>
					<About></About>
					<Tools></Tools>
				</div>
				<ScrollArrow></ScrollArrow>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
