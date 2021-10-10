import React, { useContext, useEffect, useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

// Components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Configs
import TempPosters from "../config/TempPosters.config";

// Context
import { MovieContext } from "../context/movie.context";

const MoviePage = () => {
	const { id } = useParams();
	const { movie } = useContext(MovieContext);
	const [cast, setCast] = useState([]);
	const [similarMovies, setSimilarMovies] = useState([]);
	const [recommendedMovies, setRecommendedMovies] = useState([]);

	useEffect(() => {
		const requestCast = async () => {
			const getCast = await axios.get(`/movie/${id}/credits`);
			setCast(getCast.data.cast);
		};
		requestCast();
	}, [id]);

	useEffect(() => {
		const requestSimilarMovies = async () => {
			const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
			setSimilarMovies(getSimilarMovies.data.results);
		};

		requestSimilarMovies();
	}, [id]);

	useEffect(() => {
		const requestRecommendedMovies = async () => {
			const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
			setRecommendedMovies(getRecommendedMovies.data.results);
		};

		requestRecommendedMovies();
	}, [id]);

	const settings = {
		infinite: false,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		InitialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					InitialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					infinite: true,
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};
	const settingsCast = {
		infinite: false,
		autoplay: false,
		slidesToShow: 6,
		slidesToScroll: 4,
		InitialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
					InitialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					infinite: true,
					arrows: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<>
			<MovieHero />
			<div className="my-8 container px-4 lg:ml-8 lg:w-3/4">
				<div className="flex flex-col items-start gap-3">
					<h2 className="text-black font-bold text-2xl">About the Movie</h2>
					<p className="text-gray-700 font-normal text-lg">{movie.overview}</p>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<h2 className="text-black font-bold text-2xl mb-3">
						Applicable Offers
					</h2>
					<div className="flex flex-col gap-3 lg:flex-row">
						<div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-200 border-dashed border-2 rounded-md">
							<div className="w-8 h-8">
								<FaCcVisa className="w-full h-full" />
							</div>
							<div className="flex flex-col items-start">
								<h3 className="text-black text-xl font-semibold">
									Visa Stream Offer
								</h3>
								<p className="text-gray-700">
									Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
									Stream.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-200 border-dashed border-2 rounded-md">
							<div className="w-8 h-8">
								<BiMoviePlay className="w-full h-full" />
							</div>
							<div className="flex flex-col items-start">
								<h3 className="text-black text-xl font-semibold">Filmy Pass</h3>
								<p className="text-gray-700">
									Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
									Pass @Rs.99
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<h2 className="text-black font-bold text-2xl mb-4">Cast & Crew</h2>

					<Slider {...settingsCast}>
						{cast.map((castdata) => (
							<Cast
								image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
								castName={castdata.original_name}
								role={castdata.character}
							/>
						))}
					</Slider>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<PosterSlider
						config={settings}
						images={similarMovies}
						title="You might also like"
						isDark={false}
					/>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<PosterSlider
						config={settings}
						images={recommendedMovies}
						title="BMS XCLUSIV"
						isDark={false}
					/>
				</div>
			</div>
		</>
	);
};

export default MoviePage;
