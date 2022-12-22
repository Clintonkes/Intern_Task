import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../assets/background.jpg';

const Home = () => {
	return (
		<div className='w-full h-full relative flex flex-col md:flex-row justify-center items-center text-white px-12 md:px-0 animate-fade-in'>
			<img
				src={Image}
				alt='coding'
				className='object-cover w-full h-full opacity-10'
			/>
			<div className='w-full text-center md:text-left md:w-2/3 absolute'>
				<p>Hello, nice to me you!</p>
				<h1 className='my-5 text-big leading-tight md:leading-normal'>
					I am Clinton
				</h1>
				<p className='text-gray-400'>SOFTWARE DEVELOPER</p>
				<p className='max-w-sm mx-auto md:mx-0 my-6 px-5 md:px-0'>
					Nothing is more fun than contributing to building the internet.
					<br /> I am passionate about developing web applications and softwares
					which is aimed at solving real life issues or challenges.
				</p>
				<div>
					<Link
						to='/about-me'
						className='py-2 px-4 my-10 bg-blue-600 rounded-lg'
					>
						See my Skills
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
