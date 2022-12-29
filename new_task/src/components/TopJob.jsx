import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const TopJob = () => {
	return (
		<div className='w-full shadow-lg mt-4'>
			<div className='flex justify-between items-center px-4 py-3 border-b border-solid border-gray-200 text-sm'>
				<h3 className='font-bold'>Top Jobs</h3>
				<HiOutlineDotsVertical className='text-gray-400' />
			</div>
			<div className='px-4 py-3'>
				<div className='flex items-start gap-3 mb-4'>
					<div>
						<h3 className='font-bold text-sm mb-2'>Senior Product Designer</h3>
						<p className='text-gray-600 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<p className='font-bold text-sm'>$25/hr</p>
					</div>
				</div>
				<div className='flex items-start gap-3 mb-4'>
					<div>
						<h3 className='font-bold text-sm mb-2'>Senior UI/UX Designer</h3>
						<p className='text-gray-600 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<p className='font-bold text-sm'>$25/hr</p>
					</div>
				</div>
				<div className='flex items-start gap-3 mb-4'>
					<div>
						<h3 className='font-bold text-sm mb-2'>Junior Seo Designer</h3>
						<p className='text-gray-600 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<p className='font-bold text-sm'>$25/hr</p>
					</div>
				</div>
				<div className='flex items-start gap-3 mb-4'>
					<div>
						<h3 className='font-bold text-sm mb-2'>Senior PHP Designer</h3>
						<p className='text-gray-600 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<p className='font-bold text-sm'>$25/hr</p>
					</div>
				</div>
				<div className='flex items-start gap-3 mb-4'>
					<div>
						<h3 className='font-bold text-sm mb-2'>
							Senior Developer Designer
						</h3>
						<p className='text-gray-600 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
					<div>
						<p className='font-bold text-sm'>$25/hr</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopJob;
