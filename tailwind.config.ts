import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#3A9FF7', // Sky Blue
					50: '#EBF5FF',
					100: '#D1E7FF',
					200: '#A3CFFF',
					300: '#75B7FF',
					400: '#479FFF',
					500: '#3A9FF7',
					600: '#2E7FCC',
					700: '#225FA0',
					800: '#163F73',
					900: '#0A1F46',
				},
				secondary: {
					DEFAULT: '#FF8A3D', // Warm Tangerine
					50: '#FFF4ED',
					100: '#FFE6D6',
					200: '#FFCDAD',
					300: '#FFB484',
					400: '#FF9B5B',
					500: '#FF8A3D',
					600: '#E67A35',
					700: '#CC6A2D',
					800: '#B35A25',
					900: '#994A1D',
				},
				accent: {
					green: '#4ADE80', // Fresh Green
					violet: '#8B5CF6', // Violet
				},
				neutral: {
					offWhite: '#F9FAFB',
					charcoal: '#1F2937',
				},
			},
		},
	},
	daisyui: {
		themes: [
			{
				signalsquirrel: {
					primary: '#3A9FF7',
					secondary: '#FF8A3D',
					accent: '#8B5CF6',
					neutral: '#1F2937',
					'base-100': '#F9FAFB',
					'base-200': '#F3F4F6',
					'base-300': '#E5E7EB',
					info: '#3A9FF7',
					success: '#4ADE80',
					warning: '#FF8A3D',
					error: '#EF4444',
				},
			},
		],
	},
	plugins: [daisyui],
}
export default config
