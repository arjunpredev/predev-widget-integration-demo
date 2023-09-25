import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = ({ onGetStarted }) => {
	const [isTablet, setIsTablet] = useState(window.innerHeight > 1000);

	const navigate = useNavigate();
	return (
		<div className="hero-section">
		
			<main className="max-w-screen-xl min-w-0 flex-auto divide-y dark:divide-gray-700 lg:static lg:max-h-full lg:overflow-visible">
				<section className="mb-8 pb-16 dark mx-auto flex max-w-8xl flex-col overflow-hidden px-10 sm:pb-10 lg:px-20 lg:pb-24 lg:pt-16">
					<div className="flex flex-col gap-20 justify-center">
						<div className="flex items-center gap-10">
							<div className="flex max-w-4xl flex-col justify-start gap-4">
								<div className="flex flex-col gap-4 text-left lg:gap-6">
									<h1 className="mt-20 xl:mt-10 max-w-xl text-5xl xl:max-w-4xl xl:text-7xl font-extrabold leading-none text-gray-900 dark:text-white lg:text-6xl">
										<span className="xl:inline">
											Embed the 
											<span className="ml-2 text-blue-500 xl:inline">
												pre.dev 
											</span>{" "}
											widget in your website - <span className="ml-2 text-blue-500 xl:inline">streamline</span> onboarding today.
										</span>
								
										{/*	<span className="xl:inline"> to </span>
										<span className="ml-2 text-blue-500 xl:inline">reality</span>*/}
									</h1>
									<p className="font-light max-w-xl text-lg leading-normal text-gray-300 lg:text-xl xl:text-2xl">
										Easily embed our react widget with NPM integration in your website to harness the power of Pre.dev's AI Product Expert with your clients.
									</p>

									<div className="mt-3 cursor-pointer max-w-xl text-lg leading-normal text-gray-500 dark:text-gray-400 lg:text-xl">
										<a
											onClick={onGetStarted}
											className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
										>
											Get started
											<svg
												className="w-5 h-5 ml-2 -mr-1"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
													clip-rule="evenodd"
												></path>
											</svg>
										</a>
										<a
											href="mailto:arjun@pre.dev,adam@pre.dev?subject=I'd%20like%20to%20contact%20you%20about%20pre.dev"
											className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
										>
											Contact us
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};
