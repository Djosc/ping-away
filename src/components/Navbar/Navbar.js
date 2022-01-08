import React from 'react';
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

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Yo</NavLogo>
					<MobileIcon>
						<Bars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink to="about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="contact">Contact</NavLink>
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
