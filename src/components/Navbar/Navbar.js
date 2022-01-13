import React from 'react';
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
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	const toggleContact = () => {
		scroll.scrollToBottom();
	};
	return (
		<>
			<Nav>
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
							<NavLink to="projects" spy={true} smooth={true} offset={-77} duration={500}>
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
								onClick={toggleContact}
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
