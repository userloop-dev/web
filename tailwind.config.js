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
				// Custom Tremor Border Radius
				'tremor-default': 'var(--default-radius)',
				'tremor-small': 'var(--small-radius)',
				'tremor-full': '9999px',
			},
			// Custom Tremor Shadows
			boxShadow: {
				// Light
				'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				// Dark
				'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			},
			// Custom Tremor Font Sizing
			fontSize: {
				xs: '12px',
				'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
				'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
				'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
				'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
			},
			fontWeight: {
				normal: '375',
			},
			colors: {
				background: 'var(--background)',
				border: {
					DEFAULT: 'var(--border)',
					focus: 'var(--border-focus)',
				},
				surface: {
					light: 'var(--surface-light)',
					medium: 'var(--surface-medium)',
					dark: 'var(--surface-dark)',
				},
				text: {
					light: 'var(--text-light)',
					medium: 'var(--text-medium)',
					dark: 'var(--text-dark)',
					extraDark: 'var(--text-extra-dark)',
				},

				// Custom Tremor Styles
				tremor: {
					brand: {
						DEFAULT: 'var(--text-medium)',
					},
					background: {
						DEFAULT: 'var(--surface-light)',
					},
					border: {
						DEFAULT: 'var(--border)',
					},
					ring: {
						DEFAULT: 'var(--border)',
					},
					content: {
						DEFAULT: 'var(--text-medium)',
						emphasis: 'var(--text-medium)',
					},
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
	safelist: [
		...['[#0369a1]', '[#15803d]', '[#b91c1c]', '[#ea580c]', '[#eab308]', '[#6d28d9]', '[#db2777]'].flatMap((customColor) => [
			`bg-${customColor}`,
			`border-${customColor}`,
			`hover:bg-${customColor}`,
			`hover:border-${customColor}`,
			`hover:text-${customColor}`,
			`fill-${customColor}`,
			`ring-${customColor}`,
			`stroke-${customColor}`,
			`text-${customColor}`,
			`ui-selected:bg-${customColor}`,
			`ui-selected:border-${customColor}`,
			`ui-selected:text-${customColor}`,
		]),
	],
	plugins: [require('tailwindcss-animate')],
};
