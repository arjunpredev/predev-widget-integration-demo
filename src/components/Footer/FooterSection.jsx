import React from "react";

const FooterSection = ({ title, links }) => {
	return (
		<div>
			<h2 className="mb-3 text-xs font-semibold text-white uppercase">
				{title}
			</h2>
			<hr className="mb-3 border-gray-800" />
			<ul className="text-gray-400">
				{links.map((link) => (
					<li key={link.name} className="mb-2">
						<a href={link.href} className="text-xs hover:underline">
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterSection;
