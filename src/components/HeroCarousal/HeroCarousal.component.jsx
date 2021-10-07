import React from "react";
import HeroSlider from "react-slick";

// Component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
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

	const images = [
		"https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
		"https://images.unsplash.com/photo-1633509179414-abd92551cecb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
		"https://images.unsplash.com/photo-1633486294747-63fbbc38cd31?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
		"https://images.unsplash.com/photo-1633479585706-69b9f3cc34aa?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
		"https://images.unsplash.com/photo-1633351344449-bea11eb58e54?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
	];

	return (
		<>
			<div className="lg:hidden">
				<HeroSlider {...settings}>
					{images.map((image) => (
						<div className="w-full h-56 md:h-64 py-3">
							<img src={image} alt="testing" className="w-full h-full" />
						</div>
					))}
				</HeroSlider>
			</div>
			<div className="hidden lg:block">
				<HeroSlider {...settingsLg}>
					{images.map((image) => (
						<div className="w-full h-80 px-1.5 py-2.5">
							<img
								src={image}
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
