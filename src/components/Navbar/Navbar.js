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
						Yo
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<Bars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink to="about" spy={true} smooth={true} offset={-77} duration={500}>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="features" spy={true} smooth={true} offset={-77} duration={500}>
								Projects
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								to="contact"
								spy={true}
								smooth={true}
								offset={-77}
								duration={500}
								// onClick={toggleContact}
							>
								Contact
							</NavLink>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/">Empty</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
