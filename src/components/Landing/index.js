export const LandingPage = () => {
	return (
		<>
			<div className="hero-section min-h-screen">
				<main className="min-w-0 flex-auto">
					<section className="mb-8 pb-16 mx-auto flex max-w-8xl flex-col overflow-hidden sm:pb-10 lg:px-20 lg:pt-16">
						<div className="flex lg:flex-row flex-col gap-20 justify-center">
							<div className="flex items-center gap-10 px-10">
								<div className="flex max-w-4xl flex-col justify-start gap-4">
									<div className="flex flex-col gap-4 text-left lg:gap-6">
										<h1 className="mt-20 xl:mt-10 max-w-2xl text-5xl xl:max-w-4xl xl:text-7xl font-extrabold leading-none text-white lg:text-5xl">
											<span className="xl:inline">
												Embed the
												<span className="ml-2 text-blue-500 xl:inline">
													pre.dev
												</span>{" "}
												widget in your website -{" "}
												<span className="ml-2 text-blue-500 xl:inline">
													streamline
												</span>{" "}
												onboarding today.
											</span>
										</h1>
										<p className="font-light max-w-xl text-lg leading-normal text-gray-300 lg:text-xl xl:text-2xl">
											Easily embed our react widget with NPM integration in your
											website to harness the power of Pre.dev's AI Product
											Expert with your clients.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-3 cursor-pointer pr-10">
								<iframe
									title="pre.dev"
									height="590px"
									width="420px"
									src={`https://pre.dev/iframe/enterprise/chat/${process.env.REACT_APP_PREDEV_API_KEY}`}
								/>
							</div>
						</div>
					</section>
				</main>
			</div>
			<a
				className="github-fork-ribbon"
				href="https://github.com/arjunpredev/predev-widget-integration-demo"
				data-ribbon="Fork me on GitHub"
				title="Fork me on GitHub"
			>
				Fork me on GitHub
			</a>
		</>
	);
};
