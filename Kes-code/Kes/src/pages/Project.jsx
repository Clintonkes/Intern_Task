import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
	return (
		<div className='bg-lightBlack w-full h-full flex flex-col md:flex-row justify-center items-center text-white animate-fade-in'>
			<div>
				<a
					href='https://github.com/Clintonkes'
					target='_blank'
					className='py-2 px-4 my-10 bg-purple-700 font-extrabold rounded-lg'
				>
					View Projects on GitHub
				</a>
			</div>
			<div className='mt-10'>
				<Link
					to='/contact'
					className='py-2 px-4 my-10 bg-blue-600 rounded-lg'
				>
					Let's Connect
				</Link>
			</div>
		</div>
	);
};

export default Project;
