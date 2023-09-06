import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				text: '#1F1F1F',
				background: '#eaedfa',
				primary: '#5368d5',
				secondary: '#d6dbf5',
				accent: '#80B4E6',
				bgc: '#E6D3B2',
				bgclight: '#F0E5D1',
				'bgc-dark': '#B5883B',
				borderColor: '#4E473B',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				// background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// primary: {
				// 	DEFAULT: 'hsl(var(--primary))',
				// 	foreground: 'hsl(var(--primary-foreground))'
				// },
				// secondary: {
				// 	DEFAULT: 'hsl(var(--secondary))',
				// 	foreground: 'hsl(var(--secondary-foreground))'
				// },
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				// accent: {
				// 	DEFAULT: 'hsl(var(--accent))',
				// 	foreground: 'hsl(var(--accent-foreground))'
				// },
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				montserrat: 'Montserrat, sans-serif',
				lora: 'Lora, serif'
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
