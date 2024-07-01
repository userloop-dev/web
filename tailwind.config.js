const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: ['class'],
	content: ['src/**/*.{ts,tsx}', './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'], // Tremor module
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
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			transitionProperty: {
				height: 'height',
			},
			borderRadius: {
				DEFAULT: 'var(--default-radius)',
				small: 'var(--small-radius)',
			},
			colors: {
				brand: {
					workflows: 'var(--brand-workflows)',
				},
				surface: {
					100: 'var(--surface-100)',
					200: 'var(--surface-200)',
				},
				gray: {
					100: 'var(--gray-100)',
					200: 'var(--gray-200)',
					300: 'var(--gray-300)',
					400: 'var(--gray-400)',
					500: 'var(--gray-500)',
					600: 'var(--gray-600)',
					700: 'var(--gray-700)',
					800: 'var(--gray-800)',
					900: 'var(--gray-900)',
					1000: 'var(--gray-1000)',
				},
				blue: {
					100: 'var(--blue-100)',
					200: 'var(--blue-200)',
					300: 'var(--blue-300)',
					400: 'var(--blue-400)',
					500: 'var(--blue-500)',
					600: 'var(--blue-600)',
					700: 'var(--blue-700)',
					800: 'var(--blue-800)',
					900: 'var(--blue-900)',
					1000: 'var(--blue-1000)',
				},
				green: {
					100: 'var(--green-100)',
					200: 'var(--green-200)',
					300: 'var(--green-300)',
					400: 'var(--green-400)',
					500: 'var(--green-500)',
					600: 'var(--green-600)',
					700: 'var(--green-700)',
					800: 'var(--green-800)',
					900: 'var(--green-900)',
					1000: 'var(--green-1000)',
				},
				red: {
					100: 'var(--red-100)',
					200: 'var(--red-200)',
					300: 'var(--red-300)',
					400: 'var(--red-400)',
					500: 'var(--red-500)',
					600: 'var(--red-600)',
					700: 'var(--red-700)',
					800: 'var(--red-800)',
					900: 'var(--red-900)',
					1000: 'var(--red-1000)',
				},
			},
			keyframes: {
				'fade-in': {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				'slide-from-left': {
					from: { transform: 'translateX(-20px)', opacity: 0 },
					to: { transform: 'translateX(0px)', opacity: 1 },
				},
				'slide-from-right': {
					from: { transform: 'translateX(20px)', opacity: 0 },
					to: { transform: 'translateY(0px)', opacity: 1 },
				},
				'slide-from-top': {
					from: { transform: 'translateY(-20px)', opacity: 0 },
					to: { transform: 'translateY(0px)', opacity: 1 },
				},
				'slide-from-bottom': {
					from: { transform: 'translateY(20px)', opacity: 0 },
					to: { transform: 'translateY(0px)', opacity: 1 },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pop-in': {
					from: { transform: 'scale(0.95)', opacity: 0 },
					to: { transform: 'scale(1)', opacity: 1 },
				},
				'pop-out': {
					from: { transform: 'scale(1)', opacity: 1 },
					to: { transform: 'scale(0.75)', opacity: 0 },
				},
				'fall-in': {
					'0%': { transform: 'scale(1.1)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 },
				},
			},
			animation: {
				'fade-in': 'fade-in 0.2s linear forwards',
				'slide-from-left': 'slide-from-left 0.2s ease-out forwards',
				'slide-from-right': 'slide-from-right 0.2s ease-out forwards',
				'slide-from-top': 'slide-from-top 0.2s ease-out forwards',
				'slide-from-bottom': 'slide-from-bottom 0.2s ease-out forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pop-in': 'pop-in 0.2s ease-in-out forwards',
				'pop-out': 'pop-out 0.2s ease-in-out forwards',
				'fall-in': 'bounce-pop-in 0.3s ease-in-out forwards',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
