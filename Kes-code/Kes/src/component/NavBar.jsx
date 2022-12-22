import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const isNotActiveStyle =
	'flex md:items-center md:py-5 md:px-4 gap-3 text-white hover:text-bold transistion-all duration-200 ease-in-out capitalize';
const isActiveStyle =
	'flex md:items-center md:py-5 md:px-4 gap-3 font-extrabold border-b-4 border-white transistion-all duration-200 ease-in-out capitalize';

const NavBar = () => {
	const [showNav, setShowNav] = useState(false);
	const toggleNav = () => {
		setShowNav((prev) => !prev);
	};
	const handleCloseNavbar = () => {
		setShowNav(false);
	};
	return (
		<nav>
			<div
				className='flex justify-center items-center w-8 h-8 absolute cursor-pointer ml-5 mt-5 z-20 md:hidden'
				onClick={toggleNav}
			>
				<div className={`menu--btn ${showNav ? 'open' : ''}`}></div>
			</div>
			<div className={`md:hidden absolute left-0 right-0 bottom-0 top-0 ${showNav ? 'translate-x-0' : '-translate-x-full'} z-10`}>
				<div
					className={`flex md:hidden bg-lightBlack w-1/2 h-screen py-5 text-white pt-16 px-5 transition-transform duration-300 ${
						showNav ? 'translate-x-0' : '-translate-x-full'
					}  border-r-2 border-gray-400`}
				>
					<div className='flex flex-col gap-5 text-lg text-left'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
							onClick={handleCloseNavbar}
						>
							Home
						</NavLink>
						<NavLink
							to='/About-me'
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
							onClick={handleCloseNavbar}
						>
							About me
						</NavLink>
						<NavLink
							to='/project'
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
							onClick={handleCloseNavbar}
						>
							Project
						</NavLink>
						<NavLink
							to='/contact'
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
							onClick={handleCloseNavbar}
						>
							Contact
						</NavLink>
					</div>
				</div>
			</div>

			<div className='hidden absolute top-0 left-0 md:flex bg-lightBlack w-full  text-white  justify-center items-center z-10'>
				<div className='flex gap-5'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						Home
					</NavLink>
					<NavLink
						to='/About-me'
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						About me
					</NavLink>
					<NavLink
						to='/project'
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						Project
					</NavLink>
					<NavLink
						to='/contact'
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
					>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
