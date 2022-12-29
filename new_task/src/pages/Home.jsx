import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './Feed';
import Navbar from '../components/Navbar';
import {
	Profile,
	Suggestions,
	TopJob,
	MostViewed,
	MostViewedPeople,
	Footer,
	SignUpBanner,
} from '../components/index';

const Home = () => {
	return (
		<div className='relative w-full min-h-screen top-0 bg-gray-100'>
			<div className='w-full fixed flex justify-center items-center top-0 left-0 bg-red-500 px-4 py-3 text-white z-10'>
				<Navbar />
			</div>
			<div className='flex justify-center gap-5 pt-16 w-full min-h-screen px-5 md:px-10'>
				<section className='w-1/4 flex flex-col gap-3 mt-3 hidden md:block'>
					<div>
						<Profile />
					</div>
					<div>
						<Suggestions />
					</div>
					<div>
						<Footer />
					</div>
				</section>

				<div className='w-2/4'>
					<Routes>
						<Route
							path='/'
							element={<Feed />}
						></Route>
					</Routes>
				</div>

				<section className='w-1/4 mt-4 hidden md:block'>
					<div>
						<SignUpBanner />
					</div>
					<div>
						<TopJob />
					</div>
					<div>
						<MostViewed />
					</div>
					<div>
						<MostViewedPeople />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
