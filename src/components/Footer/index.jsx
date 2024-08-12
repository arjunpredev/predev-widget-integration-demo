import {
	TwitterLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { getTermsOfServiceURL, getPrivacyPolicyURL } from "../../constants";
import { Link } from "react-router-dom";

const footerNavs = [
	{
		label: "Product",
		items: [
			{
				href: "https://pre.dev#features",
				name: "Features",
			},
			{
				href: "https://pre.dev#pricing",
				name: "Pricing",
			},
			{
				href: "https://calendly.com/pre_dev/30-minute-meeting",
				name: "Request Demo",
			},
		],
	},

	{
		label: "Resources",
		items: [
			{
				href: "https://calendly.com/pre_dev/30-minute-meeting",
				name: "Contact Us",
			},
			{
				name: "Widget Demo",
				href: "https://demo-agency.pre.dev",
			},
		],
	},
	{
		label: "Legal",
		items: [
			{
				href: getTermsOfServiceURL(),
				name: "Terms",
			},

			{
				href: getPrivacyPolicyURL(),
				name: "Privacy Policy",
			},
			{
				href: "https://pre.dev/enterprise-privacy-datasheet",
				name: "Enterprise Privacy Datasheet",
			},
		],
	},
];

const footerSocials = [
	{
		href: "https://www.linkedin.com/company/99516177/",
		name: "LinkedIn",
		icon: <LinkedInLogoIcon className="h-4 w-4" />,
	},
	{
		href: "https://twitter.com/predotdev",
		name: "Twitter",
		icon: <TwitterLogoIcon className="h-4 w-4" />,
	},
	{
		href: "https://www.instagram.com/predev.ai/",
		name: "Instagram",
		icon: <InstagramLogoIcon className="h-4 w-4" />,
	},
];

export function Footer() {
	return (
		<footer className="dark bg-black">
			<div className="mx-auto w-full max-w-screen-xl xl:pb-2">
				<div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
					<Link to="https://pre.dev" className="mb-12 flex-col flex gap-4">
						<a className="flex items-center gap-2">
							<img src="/predev.png" className="h-8 text-primary" />
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								pre.dev
							</span>
						</a>
						<p className="max-w-xs text-white">AI Product Architect</p>
					</Link>
					<div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
						{footerNavs.map((nav) => (
							<div key={nav.label}>
								<h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
									{nav.label}
								</h2>
								<ul className="gap-2 grid">
									{nav.items.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
					<div className="flex space-x-5 sm:justify-center sm:mt-0">
						{footerSocials.map((social) => (
							<a
								key={social.name}
								href={social.href}
								className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
							>
								{social.icon}
								<span className="sr-only">{social.name}</span>
							</a>
						))}
					</div>
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						Copyright © {new Date().getFullYear()}{" "}
						<a href="https://pre.dev" className="cursor-pointer">
							Pre.dev Corp
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
			{/*   <SiteBanner /> */}
		</footer>
	);
}
