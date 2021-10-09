import React from "react";

const Cast = (props) => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="w-32 h-32">
					<img
						src={props.image}
						alt="Crew"
						className="w-full h-full rounded-full"
					/>
				</div>
                <h1 className="text-lg text-black">{props.castName}</h1>
                <h5 className="text-sm text-gray-700">as {props.role}</h5>
			</div>
		</>
	);
};

export default Cast;
