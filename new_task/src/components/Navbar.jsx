import React, { useState } from 'react';
import { AiTwotoneHome, AiOutlineCaretDown } from 'react-icons/ai';
import { HiPuzzlePiece } from 'react-icons/hi2';
import { FaBuilding } from 'react-icons/fa';
import { IoIosFlash } from 'react-icons/io';
import { IoPeopleSharp, IoBriefcaseSharp } from 'react-icons/io5';
import { BsFillEnvelopeFill } from 'react-icons/bs';

import Picture from '../assets/profile-picture.jpg';

const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div className='w-full flex justify-between items-center gap-8 px-10'>
			<div className='flex gap-2 justify-center items-center'>
				<div className='bg-white flex justify-center items-center rounded-full'>
					<h2 className='text-red-400 font-bold text-lg w-8 h-8 text-center pt-0.5'>
						W
					</h2>
				</div>
				<div>
					<input
						type='text'
						name='search'
						id='search'
						placeholder='Search'
						className='rounded-sm py-1 px-2 search'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
			<nav className='flex gap-5 justify-center items-center text-sm'>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<AiTwotoneHome />
					Home
				</a>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<FaBuilding />
					Company
				</a>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<HiPuzzlePiece />
					Projects
				</a>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<IoPeopleSharp />
					Profiles
				</a>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<IoBriefcaseSharp />
					Jobs
				</a>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<BsFillEnvelopeFill />
					Messages
				</a>
				<a
					href='#'
					className='flex flex-col justify-center items-center'
				>
					<IoIosFlash />
					Notifications
				</a>
				<a
					href='#'
					className='hidden justify-center items-center gap-2 border-l-2 border-r-2 border-gray-300 px-2 w-full  xl:flex'
				>
					<div className='w-8 h-8'>
						<img
							src={Picture}
							alt='profile picture'
							className='rounded-full w-8 h-8 object-cover'
						/>
					</div>
					<p>Jane</p>
					<AiOutlineCaretDown />
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
