import React from 'react';
import {
	SidebarContainer,
	CloseIcon,
	Icon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarBtn,
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
						<SidebarLink
							to="projects"
							spy={true}
							smooth={true}
							offset={-79}
							duration={500}
							onClick={toggle}
						>
							Projects
						</SidebarLink>
						<SidebarLink to="contact" onClick={toggle}>
							Contact
						</SidebarLink>
					</SidebarMenu>
					<SideBtnWrap>
						<SidebarBtn to="/">Empty</SidebarBtn>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
