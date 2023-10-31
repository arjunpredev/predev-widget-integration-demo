export const chatEndingIndex = 5;

export const setRedirectURL = (url: string) => {
	console.log({ url });
	localStorage.setItem("redirectURL", url);
};

export const getRedirectURL = (presetURL) => {
	console.log({ presetURL });
	if (presetURL) return presetURL;
	let url = localStorage.getItem("redirectURL");
	return url ? url : "/projects";
};

export const getPrivacyPolicyURL = () => {
	return "https://app.termly.io/document/privacy-policy/001064ff-9086-48f5-aebe-68ee93343415";
};

export const getTermsOfServiceURL = () => {
	return "https://app.termly.io/document/terms-of-service/cca10b20-556c-4cf1-ad82-bc030a653363";
};
