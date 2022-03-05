import React from 'react';
import './style.scss';

// TODO add lazy loading attributes to images
export default function Projects() {
    return (
        <div id='projects' className='section'>
            <h2>Let's build your ideas together...</h2>
            <div className='project-cards'>
                <div className='card'>
                    <h3>Indeed Resume App</h3>
                    <hr />
                    <div className='card-image'>
                        <a href='https://www.resume.com/'>
                            <img loading='lazy' src='/images/resumecom.jpg' alt='resume-builder' />
                        </a>
                    </div>
                    <p>
                        An Indeed owned platform for building resumes and cover-letters. Tech-stack includes, Node, Javascript, React, Typescript, GraphQL, MongoDB, gRPC, Gatsby, and Jest, using the microservice architecture.
                    </p>
                </div>
                <div className='card'>
                    <h3>Okra NG</h3>
                    <hr />
                    <div className='card-image'>
                        <a href='https://okra.ng/'>
                            <img loading='lazy' src='/images/okra-home.jpg' alt='okra-ng' />
                        </a>
                    </div>
                    <p>
                        A Fin-Tech company website I contributed to in 2019 using React, Node, MongoDB, HTML, CSS and JS.
                    </p>
                </div>
                <div className='card'>
                    <h3>Coin Info</h3>
                    <hr />
                    <div className='card-image'>
                        <a href='https://coininfo.netlify.app/'>
                            <img loading='lazy' src='/images/coin-info.jpg' alt='coin-info app' />
                        </a>
                    </div>
                    <p>A React application that displays detailed information about various cryptocurrencies.</p>
                </div>
                <div className='card'>
                    <h3>Color Game</h3>
                    <hr />
                    <div className='card-image'>
                        <a href='https://uniqcoda.github.io/Color-Game/'>
                            <img loading='lazy' src='/images/color_game.png' alt='color game' />
                        </a>
                    </div>
                    <p>
                        A color guessing game I built in 2019 with HTML, JS and CSS. This is one of my first projects as
                        a developer.
                    </p>
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
                        A platform that helps you make investment decisions in various sectors like agriculture and real
                        estate. Built with HTML, CSS, and JavaScript.
                    </p>
                </div>
            </div>
        </div>
    );
}
