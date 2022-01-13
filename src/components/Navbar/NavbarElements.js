import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
	/* background: #000; */
	background-color: transparent;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const Bars = styled(FaBars)``;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLink = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 5px solid #fff;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkS)`
	background: #fff;
	white-space: nowrap;
	padding: 10px 22px;
	color: #000;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all ease-in-out;
		background: #fff;
		color: #000;
		transform: translateY(-2px);
	}
`;
