import React, {useContext} from "react";

// Context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
	const {movie} = useContext(MovieContext);

	const genres = movie.genres?.map(({name}) => name).join(", ") // Optional Chaining
	return (
		<>
			<div className="flex flex-col gap-3 lg:gap-8">
				<div className="flex items-center gap-3 md:px-4">
					<div className="w-24 h-6">
						<img
							src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
							alt="premier"
							className="w-full h-full"
						/>
					</div>
					<span className="bg-premier-700 p-1 text-xs text-white rounded-xl">
						Streaming Now
					</span>
				</div>
				<h1 className="hidden text-white lg:text-4xl font-bold lg:block lg:px-4">
					{movie.original_title}
				</h1>
				<div className="flex flex-col-reverse gap-3 lg:gap-8 lg:flex-col">
					<div className="text-white font-normal flex flex-col gap-4 md:px-4 sm:px-2">
						<h4>4k &bull; {movie.original_language}</h4>
						<h4>{(movie.runtime /60).toFixed(2)}h &bull; Action, Sci-Fi, Thriller &bull; 13+ </h4>
					</div>
					<div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
						<button className="bg-signin-400 w-full py-3 text-white font-semibold rounded-lg">
							Rent ₹149
						</button>
						<button className="bg-signin-400 w-full py-3 text-white font-semibold rounded-lg">
							Buy ₹689
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieInfo;
