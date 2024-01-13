module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				slideDown: {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
				wiggle: "wiggle 1s ease-in-out infinite",
				slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
			},
		},
	},
	variants: {
		extend: {
			animation: ["hover", "focus"],
		},
	},
	plugins: [],
};
