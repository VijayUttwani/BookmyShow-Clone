import React from "react";

// Components
import EntertainementCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
	return (
		<>
			<div className="container mx-auto px-4">
				<h1 className=" text-2xl font-bold text-gray-800 px-2 my-2">
					The Best of Entertainment
				</h1>
				<EntertainementCardSlider />
			</div>
		</>
	);
};

export default HomePage;
