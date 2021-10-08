import React from "react";

export const Poster = (props) => {
	return (
		<>
			<div className="flex flex-col items-start gap-1 px-1 md:px-4">
				<div className=" h-40 md:h-80">
					<img src={props.src} alt={props.title} className="w-full h-full rounded-md" />
				</div>
				<h3
					className={`text-xl font-bold ${
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
		</>
	);
};

export default Poster;
