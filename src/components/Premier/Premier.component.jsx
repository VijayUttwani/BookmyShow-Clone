import React from "react";
import Slider from "react-slick";

// Components
import Poster from "../Poster/Poster.component";

// Configs
import PosterCarousalSettings from "../../config/PosterCaraousal.config";
import PremierImage from "../../config/TempPosters.config";

export const Premier = (props) => {

	return (
		<>
			<div className="flex flex-col items-start">
				<h3 className="text-white text-xl font-bold">Premieres</h3>
				<p className="text-white text-sm">Brand new releases every friday</p>
			</div>
			<Slider {...PosterCarousalSettings}>
				{PremierImage.map((image) => (
					<Poster {...image} isDark />
				))}
			</Slider>
		</>
	);
};

export default Premier;
