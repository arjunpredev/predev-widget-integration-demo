import React from "react";

const CompanyLogo = () => {
	return (
		<div className="mb-6 md:mb-0 flex flex-col justify-center">
			<a className="flex items-center text-left">
				<img
					src="https://phecommerce.s3.amazonaws.com/logovec.png"
					className="mr-2 h-8"
					alt="ECS Logo"
				/>
				<span className="text-left text-2xl font-semibold whitespace-nowrap dark:text-white">
					pre.dev
				</span>
			</a>
			<p className="text-gray-200 text-sm mt-2">
				Accelerate idea to development.
			</p>
		</div>
	);
};

export default CompanyLogo;
