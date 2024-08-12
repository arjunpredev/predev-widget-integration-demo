import { Footer } from "../Footer";

export const LandingPage = () => {
	return (
		<>
			<main className="hero-section min-h-screen flex justify-center items-center">
				<section className="max-w-8xl w-full px-4 lg:px-20 py-8 sm:py-10 lg:py-16">
					<div className="flex flex-col xl:flex-row gap-10 lg:gap-20 justify-center items-center">
						<div className="max-w-4xl w-full">
							<h1 className="mt-10 md:mt-0 text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6 text-center lg:text-left">
								<span className="text-blue-500">Streamline</span> project
								scoping today.
							</h1>
							<p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 font-light max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
								Easily embed the widget with one line of code.
							</p>
							<pre className="mt-4 bg-gray-700 p-3 sm:p-4 rounded-md text-white whitespace-pre-wrap overflow-x-auto text-sm sm:text-base">
								<code>
									{`<iframe src="https://pre.dev/iframe/enterprise/chat/YOUR_API_KEY_HERE" height="590" width="420"/>`}
								</code>
							</pre>
						</div>
						<div className="mt-6 lg:mt-3 cursor-pointer w-full max-w-md lg:max-w-none flex justify-center">
							<iframe
								title="pre.dev"
								height="590px"
								width="420px"
								src={`https://pre.dev/iframe/enterprise/chat/${process.env.REACT_APP_PREDEV_API_KEY}`}
								className="border-0 rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</section>
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
	);
};
