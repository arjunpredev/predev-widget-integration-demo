import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import { LandingPage } from "./components/Landing";




function App() {
	return (
	
	<Router>
		<div className="flex flex-col justify-center bg-gray-800">
			<Routes>
			
				{/*Landing Page Routes*/}
				<Route
					path="/"
					element={
						<LandingPage />
					}
				/>
			
			</Routes>
		</div>
	</Router>
					
	);
}

export default App;
