import { createStitches } from "@stitches/react";

export const { styled, css, theme, globalCss } = createStitches({
	theme: {
		colors: {
			primary: '#0070f3',
			secondary: '#1db954',
			gray100: '#f3f3f3',
			gray700: '#333',
			white: '#fff',
			black: '#000',
		},
		space: {
			xs: '4px',
			sm: '8px',
			md: '16px',
			lg: '32px',
		},
		radii: {
			sm: '6px',
			md: '12px',
		},
		fonts: {
			body: 'Inter, sans-serif',
		},
	},
	media: {
		sm: '(max-width: 600px)',
		md: '(max-width: 900px)',
	},
});
