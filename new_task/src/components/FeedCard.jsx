import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { AiFillClockCircle, AiFillHeart, AiFillEye } from 'react-icons/ai';
import { FaEnvelope, FaCommentAlt } from 'react-icons/fa';

import location from '../assets/location_icon.png';
import dice from '../assets/dice_icon.png';
import banner from '../assets/banner_icon.png';
import likes from '../assets/likes.png';

const FeedCard = ({ data }) => {
	const [showOption, setShowOption] = useState(false);
	return (
		<div className='w-full bg-white flex flex-col gap-4 px-4 shadow-lg py-5 mt-3'>
			<div className='flex justify-between items-center text-gray-500 relative w-full'>
				<div className='flex gap-2 items-center'>
					<div>
						<img
							src={data.image}
							alt='profile'
							className='w-12 h-12 rounded-full object-cover'
						/>
					</div>
					<div>
						<h3 className='text-black font-bold'>John Doe</h3>
						<div className='flex text-sm items-center gap-1'>
							<AiFillClockCircle />
							<h4>3 min ago</h4>
						</div>
					</div>
				</div>
				<div className={`cursor-pointer ${showOption && 'text-red-500 font-bold'}`} onClick={()=>{setShowOption(prev => !prev)}}>
					<HiOutlineDotsVertical className='text-xl pointer-events-none' />
				</div>
				{showOption && (
					<div className='absolute top-10 right-0 bg-white flex flex-col w-32 px-4 py-3 rounded-md shadow-xl text-gray-700 text-sm font-semibold gap-2'>
						<button>Edit Post</button>
						<button>Unsaved</button>
						<button>Unbid</button>
						<button>Close</button>
						<button>Hide</button>
					</div>
				)}
			</div>

			<div className='flex justify-between items-center'>
				<div className='flex gap-2 items-center'>
					<div className='flex gap-1 items-center text-sm text-gray-400'>
						<img
							src={dice}
							alt='icon'
							className='w-5 h-5'
						/>
						<p>{data.role}</p>
					</div>
					<div className='flex gap-1 items-center text-sm text-gray-400'>
						<img
							src={location}
							alt='icon'
							className='w-4 h-4 bg-green-400 rounded-full p-1'
						/>
						<p>India</p>
					</div>
				</div>
				<div className='flex gap-2 items-center'>
					<img
						src={banner}
						alt='icon'
						className='w-8 h-8 bg-green-400 rounded-md p-1'
					/>
					<FaEnvelope className='text-3xl bg-red-400 text-white p-1 rounded-md' />
				</div>
			</div>

			<div className='flex flex-col gap-2 border-b-2 pb-5'>
				<h2 className='font-bold'>{data.job}</h2>

				<div className='flex gap-2 items-center'>
					{data.time ? (
						<p className='py-1 px-2 bg-green-400 text-xs rounded-xl text-white'>
							{data.time}
						</p>
					) : (
						''
					)}

					<p className='font-semibold text-sm'> {data.pay}</p>
				</div>

				<p className='text-sm text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
					corporis non dolorem eum delectus eius eos eligendi vel repudiandae
					doloribus quaerat ut odit modi commodi labore. Optio provident magni
					quos!...<span className='text-red-500 font-bold cursor-pointer'>View more</span>
				</p>

				<div className='flex gap-3 text-sm flex-wrap'>
					{data.tags.map((tag, i) => (
						<p key={i} className='px-3 py-1 bg-gray-300 text-gray-400 rounded-2xl'>
							{tag}
						</p>
					))}
				</div>
			</div>

			<div className='flex justify-between items-center text-sm text-gray-400'>
				<div className='flex items-center'>
					<div className='flex items-center gap-1'>
						<AiFillHeart />
						<p>Like</p>
						<img
							src={likes}
							alt='likes'
							className='h-6'
						/>
					</div>
					<div className='flex items-center gap-1'>
						<FaCommentAlt />
						<p>Comments</p>
						<p>15</p>
					</div>
				</div>
				<div className='flex items-center gap-1'>
					<AiFillEye />
					<p>Views</p>
					<p>50</p>
				</div>
			</div>
		</div>
	);
};

export default FeedCard;
