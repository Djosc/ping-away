import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
	/* background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')}; */
	background: ${({ primary }) => (primary ? '#000' : '#fff')};
	border: 2px solid black;
	white-space: nowrap;
	outline: none;
	min-width: 150px;
	max-width: 350px;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
	color: ${({ primary }) => (primary ? '#fff' : '#000')};
	font-size: ${({ big }) => (big ? '18px' : '14px')};
	margin-right: 0.7rem;
	margin-left: 0.7rem;

	&:hover {
		transform: translateY(-2px);
	}

	@media screen and (max-width: 768px) {
		padding: 10px 14px;
		font-size: 14px;
	}
`;
