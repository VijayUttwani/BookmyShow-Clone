import React, { useContext } from "react";
import { BiShareAlt, BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";

// Context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
	const { movie } = useContext(MovieContext);
	return (
		<>
			<div className="text-white flex items-center justify-between">
				<div>
					<h3 className="text-2xl font-bold">{movie.original_title}</h3>
				</div>
				<div className="w-7 h-7">
					<BiShareAlt className="w-full h-full" />
				</div>
			</div>
		</>
	);
};

const NavLg = () => {
	return (
		<>
			<div className="container mx-auto px-4 flex items-center justify-between">
				<div className="flex items-center w-1/2 gap-3">
					<div className="w-12 h-12">
						<img
							src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
							alt="logo"
							className="w-full h-full"
						/>
					</div>
					<div className="w-full flex items-center gap-3 bg-white px-3 py-1.5 rounded-md">
						<BiSearch className="w-5 h-5" />
						<input
							type="search"
							className="w-full bg-transparent border-none focus:outline-none"
							placeholder="Search for Movies, Events, Plays, Sports and Activities "
						/>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<span className="text-gray-300 text-sm flex items-center cursor-pointer hover:text-white">
						Indore <BiChevronDown />
					</span>
					<button className="bg-signin-400 text-white px-3 py-1 text-xs rounded hover:bg-signin-500">
						Sign in
					</button>
					<div className="w-8 h-8 text-white">
						<BiMenu className="w-full h-full" />
					</div>
				</div>
			</div>
		</>
	);
};

const MovieNavbar = () => {
	return (
		<>
			<nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-sm lg:relative lg:bg-navbar-700 px-4 py-2">
				<div className="md:hidden">
					{/* Mobile Screen */}
					<NavSm />
				</div>
				<div className="hidden md:block lg:hidden">
					{/* Medium/Tab Screen */}
					<NavSm />
				</div>
				<div className="hidden lg:flex">
					{/* Large Screen */}
					<NavLg />
				</div>
			</nav>
		</>
	);
};

export default MovieNavbar;
