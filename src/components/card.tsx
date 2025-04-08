import { styled } from '../styles/stitches.config.ts';

export const Card = styled('div', {
	backgroundColor: '$white',
	borderRadius: '$md',
	width: 'fit-content',
	padding: '$lg',
	margin: '0 auto',
	boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
	fontFamily: '$body',

	'@sm': {
		padding: '$md',
	},
});
