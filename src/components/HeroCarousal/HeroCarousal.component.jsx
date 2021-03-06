import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const requestNowplayingMovies = async () => {
			const getImages = await axios.get("/movie/now_playing");
			setImages(getImages.data.results);
		};
		requestNowplayingMovies();
	}, []);

	const settingsLg = {
		arrows: true,
		autoplay: true,
		centerMode: true,
		centerPadding: "300px",
		infinite: true,
		speed: 500,
		slidestoShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<>
			<div className="lg:hidden">
				<HeroSlider {...settings}>
					{images.map((image) => (
						<div className="w-full h-56 md:h-64 py-3">
							<img
								src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
								alt="testing"
								className="w-full h-full"
							/>
						</div>
					))}
				</HeroSlider>
			</div>
			<div className="hidden lg:block">
				<HeroSlider {...settingsLg}>
					{images.map((image) => (
						<div className="w-full h-80 px-1.5 py-2.5">
							<img
								src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
								alt="testing"
								className="w-full h-full rounded-md"
							/>
						</div>
					))}
				</HeroSlider>
			</div>
		</>
	);
};

export default HeroCarousal;
