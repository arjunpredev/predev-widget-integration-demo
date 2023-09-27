import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "./components/Landing";

function App() {
	return (
		<Router>
			<div className="bg-gray-800">
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
