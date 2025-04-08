import { styled } from '../styles/stitches.config.ts';

export const Button = styled('button', {
	fontFamily: '$body',
	border: 'none',
	cursor: 'pointer',
	borderRadius: '$sm',
	padding: '$sm $md',
	transition: 'background 0.2s ease-in-out',

	'&:hover': {
		backgroundColor: '$secondary',
	},

	'&:active': {
		backgroundColor: '$primary',
	},

	variants: {
		variant: {
			primary: {
				backgroundColor: '$primary',
				color: '$white',
				'&:hover': {
					backgroundColor: '#0056c1',
				},
			},
			secondary: {
				backgroundColor: '$secondary',
				color: '$white',
				'&:hover': {
					backgroundColor: '#168d44',
				},
			},
			outline: {
				backgroundColor: 'transparent',
				border: '1px solid $gray700',
				color: '$gray700',
				'&:hover': {
					backgroundColor: '$gray100',
				},
			},
		},
		size: {
			sm: {
				fontSize: '12px',
				padding: '$xs $sm',
			},
			md: {
				fontSize: '16px',
				padding: '$sm $md',
			},
			lg: {
				fontSize: '20px',
				padding: '$md $lg',
			},
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});
