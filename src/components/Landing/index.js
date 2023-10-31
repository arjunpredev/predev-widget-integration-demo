import { Footer } from "../Footer";
import { HeroSection } from "./HeroSection";

export const LandingPage = () => {
	return (
		<>
			<HeroSection />
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
	);
};
