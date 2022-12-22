import React from 'react';
import { Link } from 'react-router-dom'
import HTMLLogo from '../assets/html5.png';
import CSSLogo from '../assets/css3.png';
import git from '../assets/git.png';
import JSLogo from '../assets/js.png';
import reactLogo from '../assets/reactjs.png';
import PHPLogo from '../assets/php.png';

const About = () => {
	return (
		<div className='bg-lightBlack w-full min-h-full flex flex-col md:gap-4 py-20 px-8 md:flex-row justify-center items-center text-white animate-fade-in'>
			<div className=' w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:pl-28'>
				<h2 className='text-3xl md:text-5xl font-extrabold'>Skills & Experience</h2>
				<div>
					<p className='text-lg text-gray-200 text-center md:text-justify max-w-md my-8'>
						I am always open to learning, collabrating with people and
						solving challenges. 
            Any opportunity given to solve challenges are
						welcomed as i believe it will only make me a better developer.
					</p>
				</div>
				<div className='text-gray-300'>
					<h3 className='bold text-2xl border-b-2 border-gray-300 mb-4'>Technical Skills</h3>
					<ul className='flex flex-col gap-1 text-center'>
						<li>HTML</li>
						<li>CSS</li>
						<li>Javacript</li>
						<li>React</li>
						<li>PHP</li>
						<li>C programming</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col gap-5 justify-center items-center w-full mt-10 md:mt-0 md:w-1/2'>
				<div className='max-w-md flex flex-wrap gap-5 justify-center items-center animate-slide-up'>
					<div className='w-20 h-20'>
						<img
							src={HTMLLogo}
							alt='html'
						/>
					</div>
					<div className='w-20 h-20'>
						<img
							src={CSSLogo}
							alt='css'
						/>
					</div>
					<div className='w-20 h-20'>
						<img
							src={git}
							alt='git'
						/>
					</div>
					<div className='w-20 h-20'>
						<img
							src={JSLogo}
							alt='javascript'
						/>
					</div>
					<div className='w-20 h-20'>
						<img
							src={reactLogo}
							alt='react'
						/>
					</div>
					<div className='w-20 h-20'>
						<img
							src={PHPLogo}
							alt='php'
						/>
					</div>
				</div>
				<Link
						to='/project'
						className='py-2 px-4 my-10 bg-blue-600 rounded-lg'
					>
						View Projects
					</Link>
			</div>
		</div>
	);
};

export default About;
