const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: ['class'],
	content: ['src/**/*.{ts,tsx}'],
	theme: {
		transparent: 'transparent',
		current: 'currentColor',
		container: {
			center: true,
			padding: '2rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			transitionProperty: {
				height: 'height',
			},
			borderRadius: {
				DEFAULT: 'var(--default-radius)',
				small: 'var(--small-radius)',
			},
			colors: {
				grayscale: {
					100: 'var(--grayscale-100)',
					200: 'var(--grayscale-200)',
					300: 'var(--grayscale-300)',
					400: 'var(--grayscale-400)',
					500: 'var(--grayscale-500)',
					600: 'var(--grayscale-600)',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
