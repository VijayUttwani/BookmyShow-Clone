module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				navbar:
				{
				  50: '#edf1fc',
				  100: '#d2d5e1',
				  200: '#b6b8c8',
				  300: '#999cb2',
				  400: '#7d809b',
				  500: '#636681',
				  600: '#4d4f65',
				  700: '#373949',
				  800: '#21222e',
				  900: '#0a0a16',
				},
				signin: {
					50: "#ffe3eb",
					100: "#ffb3c2",
					200: "#fb8399",
					300: "#f95370",
					400: "#f62448",
					500: "#dc0d2f",
					600: "#ac0624",
					700: "#7c031a",
					800: "#4c000e",
					900: "#1f0003",
				},
				premier: 
				{
				  50: '#edf0fe',
				  100: '#ced3e6',
				  200: '#afb5d0',
				  300: '#8f98bc',
				  400: '#707aa8',
				  500: '#56618e',
				  600: '#434b6f',
				  700: '#2b3147',
				  800: '#1b2032',
				  900: '#050b17',
				}
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
