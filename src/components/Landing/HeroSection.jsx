export const HeroSection = () => {
	return (
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
										website to harness the power of Pre.dev's AI Product Expert
										with your clients.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-3 cursor-pointer pr-10">
							{process.env.REACT_APP_PROD === "true" ? (
								<iframe
									title="pre.dev"
									height="570px"
									width="500px"
									src="https://pre.dev/iframe/enterprise/chat/6e4b9523-bb22-4762-b1fd-1e414f1c27f2"
								></iframe>
							) : (
								<iframe
									title="pre.dev"
									height="570px"
									width="500px"
									src="http://localhost:3000/iframe/enterprise/chat/7389415c-b0b4-40d0-98b7-1009a8325965"
								></iframe>
							)}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};
