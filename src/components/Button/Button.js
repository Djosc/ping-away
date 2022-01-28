import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const colors = {
	primary: '#000',
	secondary: '#2b2b2b',
	primaryAccent: '#ff0000',
	secondaryAccent: '#dbdbdb',
	tertiaryAccent: '#fff',
};

export const Button = styled(LinkS)`
	/* background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')}; */
	background: ${colors.primary};
	border: 2px solid black;
	white-space: nowrap;
	outline: none;
	min-width: 150px;
	/* max-width: 350px; */
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
	color: ${colors.tertiaryAccent};
	font-size: ${({ big }) => (big ? '18px' : '14px')};
	margin-right: 0.7rem;
	margin-left: 0.7rem;

	&:hover {
		transform: translateY(-2px);
		background: ${colors.secondary};
		color: ${colors.tertiaryAccent};
	}

	@media screen and (max-width: 768px) {
		margin-top: 1rem;
		padding: 14px 34px;
		font-size: 14px;
	}
`;
