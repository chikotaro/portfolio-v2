module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-gray": "#f5f5f5",
				"dark-gray": "#d1d1d1",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
};
