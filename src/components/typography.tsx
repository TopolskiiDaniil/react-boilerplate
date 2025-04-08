import { styled } from '../styles/stitches.config.ts';;

export const Heading = styled('h1', {
	fontWeight: 'bold',
	lineHeight: 1.2,
	color: '$black',

	variants: {
		size: {
			xs: { fontSize: '20px' },
			sm: { fontSize: '24px' },
			md: { fontSize: '32px' },
			lg: { fontSize: '40px' },
			xl: { fontSize: '48px' },
		},
		align: {
			left: { textAlign: 'left' },
			center: { textAlign: 'center' },
			right: { textAlign: 'right' },
		},
	},

	defaultVariants: {
		size: 'md',
		align: 'center',
	},
})

export const Text = styled('p', {
	fontSize: '16px',
	lineHeight: 1.5,
	color: '$black',

	variants: {
		size: {
			sm: { fontSize: '14px' },
			md: { fontSize: '16px' },
			lg: { fontSize: '18px' },
		},
		muted: {
			true: { color: '$gray600' },
		},
	},

	defaultVariants: {
		size: 'md',
	},
})

export const Label = styled('label', {
	fontSize: '14px',
	fontWeight: 500,
	color: '$gray700',
	display: 'block',
	marginBottom: '4px',
})

export const Caption = styled('span', {
	fontSize: '12px',
	color: '$gray500',
	fontStyle: 'italic',

	variants: {
		danger: {
			true: { color: '$red600' },
		},
	},
})
