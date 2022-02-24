import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavLink,
	NavItem,
	NavMenu,
	MobileIcon,
	Bars,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 100) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	const toggleContact = () => {
		scroll.scrollToBottom();
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>
						{/* Ping-Away */}
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<Bars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Contact</NavLink>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
