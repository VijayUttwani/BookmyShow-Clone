import { Route } from "react-router-dom";
import Temp from "./components/temp";
import DefaultHOC from "./HOC/Default.HOC";

// HOC
function App() {
	return (
		<>
			<DefaultHOC path="/" exact component={Temp} />
		</>
	);
}

export default App;
