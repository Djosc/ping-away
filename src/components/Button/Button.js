import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
	/* background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')}; */
	background: ${({ primary }) => (primary ? '#000' : '#fff')};
	border: 2px solid black;
	white-space: nowrap;
	outline: none;
	min-width: 100px;
	max-width: 300px;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
	color: ${({ primary }) => (primary ? '#fff' : '#000')};
	font-size: ${({ big }) => (big ? '18px' : '14px')};
	margin: 0rem 1rem;

	&:hover {
		transform: translateY(-2px);
	}
`;
