
import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdDone } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import PicOne from '../assets/profile-pic-1.jpg';
import PicTwo from '../assets/profile-pic-2.jpg';
import PicThree from '../assets/profile-pic-3.jpg';
import PicFour from '../assets/profile-pic-4.jpg';
import PicFive from '../assets/profile-pic-5.jpg';

const suggestionsObj = [
	{
		image: PicOne,
		name: 'Jessica Williams',
		role: 'Graphic Designer',
		following: false,
	},
	{
		image: PicTwo,
		name: 'John Doe',
		role: 'PHP Developer',
		following: false,
	},
	{
		image: PicThree,
		name: 'Poonam',
		role: 'Wordpress Developer',
		following: false,
	},
	{
		image: PicFour,
		name: 'Bill Gates',
		role: 'C & C++ Developer',
		following: false,
	},
	{
		image: PicFive,
		name: 'Jessica Williams',
		role: 'Graphic Designer',
		following: false,
	},
	{
		image: PicOne,
		name: 'Jane Doe',
		role: 'PHP Developer',
		following: false,
	},
];

const MostViewedPeople = () => {
	const [userList, setUserList] = useState(suggestionsObj);

	const handleCheck = (index) => {
		let newArr = [...userList];
		newArr[index].following = !newArr[index].following;
		setUserList(newArr);
	};

	return (
		<div className='w-full mt-4 shadow-lg'>
			<div className='flex justify-between items-center px-3 py-3 border-b border-solid border-gray-200 text-sm'>
				<h3 className='font-bold'>Most Viewed People</h3>
				<HiOutlineDotsVertical className='text-gray-400' />
			</div>
			<div className='flex flex-col gap-4 py-5 px-3'>
				{userList.map((data, i) => (
					<div
						key={i}
						className='flex items-center justify-between gap-2'
					>
						<div className='flex gap-3 items-center'>
							<div>
								<img
									src={data.image}
									alt=''
									className='w-10 h-10 rounded-full object-cover'
								/>
							</div>
							<div className='text-xs'>
								<p className='font-bold'>{data.name}</p>
								<p>{data.role}</p>
							</div>
						</div>
						<button
							className={`add-btn flex items-center justify-center ${
								data.following ? 'bg-red-500 rounded-md' : ''
							}`}
							onClick={(e) => handleCheck(i)}
						>
							{data.following ? (
								<MdDone className='text-white pointer-events-none' />
							) : (
								<GrAdd className='pointer-events-none' />
							)}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MostViewedPeople;
