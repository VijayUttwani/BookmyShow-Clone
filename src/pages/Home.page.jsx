import React, { useState, useEffect } from "react";

// Components
import EntertainementCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Configs
import TempPosters from "../config/TempPosters.config";
import axios from "axios";

const HomePage = () => {
	const [popularMovies, setpopularMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);

	useEffect(() => {
		const requestPopularMovies = async () => {
			const getPopularMovies = await axios.get("/movie/popular");
			setpopularMovies(getPopularMovies.data.results);
		};

		requestPopularMovies();
	}, []);

	useEffect(() => {
		const requestTopRatedMovies = async () => {
			const getTopRatedMovies = await axios.get("/movie/top_rated");
			setTopRatedMovies(getTopRatedMovies.data.results);
		};

		requestTopRatedMovies();
	}, []);

	useEffect(() => {
		const requestUpcomingMovies = async () => {
			const getUpcomingmovies = await axios.get("/movie/upcoming");
			setUpcomingMovies(getUpcomingmovies.data.results);
		};

		requestUpcomingMovies();
	}, []);

	return (
		<>
			<div className="flex flex-col gap-6">
				<div className="container mx-auto px-4">
					<h1 className=" text-2xl font-bold text-gray-800 px-2 my-2">
						The Best of Entertainment
					</h1>
					<EntertainementCardSlider />
				</div>

				<div className="bg-premier-700 py-10">
					<div className="container mx-auto px-4 flex flex-col gap-5">
						<div className="hidden md:flex">
							<img
								src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
								alt="Premier"
								className="w-full h-full"
							/>
						</div>
						<PosterSlider
							images={popularMovies}
							title="Premieres"
							subtitle="Brand new releases every friday"
							isDark={true}
						/>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-1 md:px-4 py-8 flex flex-col">
				<PosterSlider
					images={topRatedMovies}
					title="Online Streaming Events"
					isDark={false}
				/>
			</div>

			<div className="container mx-auto px-1 md:px-4 py-8 flex flex-col">
				<PosterSlider
					images={upcomingMovies}
					title="Outdoor Events"
					isDark={false}
				/>
			</div>
		</>
	);
};

export default HomePage;
