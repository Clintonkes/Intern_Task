import React from 'react';
import Picture from '../assets/profile-picture.jpg';

const Profile = () => {
	return (
		<div className='w-full shadow-lg'>
			<div className='relative w-full h-1/2'>
				<div className='w-full h-32 bg-red-500'></div>
				<img
					src={Picture}
					alt='picture'
					className='w-24 h-24 border-white border-4 object-cover rounded-full absolute top-1/3 left-1/2 -translate-x-1/2'
				/>
				<div className='text-center mt-12 pb-4 text-sm border-b border-solid border-gray-200'>
					<h2 className='font-bold'>Jane Doe</h2>
					<p className='text-gray-600 text-xs'>
						Graphic Designer at Self employed
					</p>
				</div>
			</div>

			<div className='h-1/2 text-sm mt-2 text-center text-gray-500'>
				<div className='py-3 border-b border-solid border-gray-300'>
					<p className='uppercase'>following</p>
					<h3 className='font-bold text-gray-800'>34</h3>
				</div>
				<div className='py-3 border-b border-solid border-gray-200'>
					<p className='uppercase'>followers</p>
					<h3 className='font-bold text-gray-800'>155</h3>
				</div>
				<div className='py-2'>
					<a
						href='#'
						className='text-red-500 font-bold text-xs'
					>
						View Profile
					</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
