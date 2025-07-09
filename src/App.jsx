import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="bg-gray-800">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<main className="hero-section min-h-screen flex justify-center items-center">
									<iframe
										src={`https://pre.dev/iframe/enterprise/hero/${process.env.REACT_APP_PREDEV_API_KEY}`}
										style={{
											width: "100%",
											height: "100vh",
										}}
									/>
								</main>
								<a
									className="github-fork-ribbon"
									href="https://github.com/arjunpredev/predev-widget-integration-demo"
									data-ribbon="Fork me on GitHub"
									title="Fork me on GitHub"
								>
									Fork me on GitHub
								</a>
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
