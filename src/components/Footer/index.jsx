import { getPrivacyPolicyURL, getTermsOfServiceURL } from "../../constants";
import CompanyLogo from "./CompanyLogo";
import FooterSection from "./FooterSection";

export const Footer = () => {
	const resourcesLinks = [
		{
			name: "Contact Us",
			href: "https://calendly.com/pre_dev",
		},
	];
	const productLinks = [
		{
			name: "Solo",
			href: "/",
		},
		{
			name: "Enterprise",
			href: "/enterprise",
		},
	];
	const legalLinks = [
		{
			name: "Privacy Policy",
			href: getPrivacyPolicyURL(),
		},
		{
			name: "Terms & Conditions",
			href: getTermsOfServiceURL(),
		},
	];

	return (
		<div className="dark bg-black px-4 py-8">
			<div className="p-4 bg-white sm:p-6 dark:bg-black">
				<div className="mx-auto max-w-screen-xl">
					<div className="md:flex md:justify-between">
						<CompanyLogo />
						<div className="grid grid-cols-3 gap-8 sm:gap-6">
							<FooterSection title="Products" links={productLinks} />
							<FooterSection title="Resources" links={resourcesLinks} />
							{/* <FooterSection title="Follow us" links={followUsLinks} /> */}
							<FooterSection title="Legal" links={legalLinks} />
						</div>
					</div>
					<hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
							© 2023{" "}
							<a href="https://pre.dev" className="hover:underline">
								pre.dev
							</a>
							. All Rights Reserved.
						</span>
						<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
							<a
								href="#"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
