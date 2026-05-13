const formatToKebabCase = (string) => {
	const parsedString = String(string);

	return parsedString
		.toLowerCase()
		.trim()
		.replaceAll(' ', '-')
		.replace(/[^0-9A-Za-z-]/g, '');
};

export { formatToKebabCase };
