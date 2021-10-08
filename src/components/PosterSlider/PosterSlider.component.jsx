import React from "react";
import Slider from "react-slick";

// Components
import Poster from "../Poster/Poster.component";

// Configs
import PosterCarousalSettings from "../../config/PosterCaraousal.config";
import PremierImage from "../../config/TempPosters.config";

export const PosterSlider = (props) => {
	return (
		<>
			<div className="flex flex-col items-start px-4 my-2">
				<h3
					className={`text-2xl font-bold ${
						props.isDark ? "text-white" : "text-black"
					}`}
				>
					{props.title}
				</h3>
				<p
					className={`text-base font-semibold ${
						props.isDark ? "text-white" : "text-gray-600"
					}`}
				>
					{props.subtitle}
				</p>
			</div>
			<Slider {...PosterCarousalSettings}>
				{props.images.map((image) => (
					<Poster {...image} isDark={props.isDark} />
				))}
			</Slider>
		</>
	);
};

export default PosterSlider;
