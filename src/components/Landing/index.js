import { HeroSection } from "./HeroSection";

export const LandingPage = () => {
	return (
		<div className="bg-gray-800">
			<HeroSection />
			<div className="bg-gray-800">
				<HeroSection />
				<a
					href="https://github.com/arjunpredev/predev-widget-integration-demo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="fork_me_on_github.png"
						alt="Fork me on GitHub"
						className="github-button"
					/>
				</a>
			</div>
			);
			<a
				className="github-fork-ribbon"
				href="https://github.com/arjunpredev/predev-react-components"
				data-ribbon="Fork me on GitHub"
				title="Fork me on GitHub"
			>
				Fork me on GitHub
			</a>
		</div>
	);
};
