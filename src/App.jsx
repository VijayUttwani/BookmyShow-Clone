import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.page";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// HOC
function App() {
	return (
		<>
			<DefaultHOC path="/" exact component={HomePage} />
			<MovieHOC path="/movie" exact component={MoviePage} />
			<DefaultHOC path="/plays" exact component={Plays} />
		</>
	);
}

export default App;
