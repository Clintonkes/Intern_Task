import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';


import PicOne from '../assets/profile-pic-3.jpg';
import PicTwo from '../assets/profile-pic-2.jpg';
import PicThree from '../assets/profile-pic-5.jpg';

const profiles = [
	{
		image: PicOne,
		name: 'Jessica Williams',
		role: 'Graphic Designer',
	},
	{
		image: PicTwo,
		name: 'John Doe',
		role: 'PHP Developer',
	},
	{
		image: PicThree,
		name: 'Poonam',
		role: 'Wordpress Developer',
	},
];

const TopProfiles = () => {
	return (
    <div className='border-2'>
      <div className='flex justify-between items-center w-full px-3 py-3 border-b-2'>
        <h3 className='font-semibold text-lg'>Top Profiles</h3>
        <HiOutlineDotsVertical className='text-2xl text-gray-400'/>
      </div>
		<div className='flex gap-3 w-full justify-center items-center my-5'>
			{profiles.map((profile, i) => (
				<div className='w-48 bg-white flex flex-col justify-center items-center pt-4 shadow-lg' key={i}>
					<div className='flex flex-col gap-3 w-full items-center justify-center'>
						<img
							src={profile.image}
							alt='profile'
							className='w-20 h-20 rounded-full object-cover'
						/>
						<div>
							<p className='font-bold text-center'>{profile.name}</p>
							<p className='text-gray-400 text-xs text-center'>
								{profile.role}
							</p>
						</div>
						<div className='flex gap-1 items-center pb-4 border-b-2 w-full justify-center'>
							<button className='text-xs font-bold p-2 bg-green-400 text-white rounded-md'>
								Follow
							</button>
							<button className='text-xl font-bold p-1 bg-red-500 text-white rounded-md'>
								<FaEnvelope />
							</button>
							<button className='text-xs font-bold p-2 bg-blue-500 text-white rounded-md'>
								Hire
							</button>
						</div>
					</div>
					<div className='text-xs font-bold hover:bg-red-400 hover:text-white w-full py-3 transition-all ease-in-out text-center cursor-pointer'>
						<p>View Profile</p>
					</div>
				</div>
			))}
		</div>
    </div>
	);
};

export default TopProfiles;
