import React from 'react';
import {
	SidebarContainer,
	CloseIcon,
	Icon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink
							to="about"
							spy={true}
							smooth={true}
							offset={-79}
							duration={500}
							onClick={toggle}
						>
							About
						</SidebarLink>
						<SidebarLink to="contact" onClick={toggle}>
							Contact
						</SidebarLink>
					</SidebarMenu>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
