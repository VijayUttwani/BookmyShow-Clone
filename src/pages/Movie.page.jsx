import React from "react";
import { FaCcVisa, FaGooglePay } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";

// Components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Configs
import TempPosters from "../config/TempPosters.config";

const MoviePage = () => {
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
					slidesToShow: 3,
					slidesToScroll: 3,
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
					<p className="text-gray-700 font-normal text-lg">
						Bruce Wayne and Diana Prince try to bring the metahumans of Earth
						together after the death of Clark Kent. Meanwhile, Darkseid sends
						Steppenwolf to Earth with an army to subjugate humans.
					</p>
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
					<div className="flex flex-wrap gap-6 px-5">
						<Cast
							image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
							castName="Henry Cavill"
							role="Superman"
						/>
						<Cast
							image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
							castName="Gal Gadot"
							role="Wonder Woman"
						/>
						<Cast
							image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
							castName="Ben Affleck"
							role="Batman"
						/>
						<Cast
							image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg"
							castName="Jason Momoa"
							role="Aquaman"
						/>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<PosterSlider
						config={settings}
						images={TempPosters}
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
						images={TempPosters}
						title="BMS XCLUSIV"
						isDark={false}
					/>
				</div>
			</div>
		</>
	);
};

export default MoviePage;
