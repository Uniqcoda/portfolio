import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Tools from './components/tools';
import Work from './components/work';
import Banner from './components/banner';

function App() {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className='App'>
			<div className='grid-container'>
				<Header></Header>
				<div className='main'>
					<Banner></Banner>
					<Projects></Projects>
					<Work></Work>
					<About></About>
					<Tools></Tools>
					<Contact></Contact>
				</div>
				<div className='scroll-to-top' onClick={scrollTop}>
					<i class='fas fa-arrow-up'></i>
					<span class='tooltiptext'>Scroll to top</span>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
