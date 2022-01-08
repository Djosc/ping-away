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

const Sidebar = () => {
	return (
		<>
			<SidebarContainer>
				<Icon>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="about">About</SidebarLink>
						<SidebarLink to="contact">Contact</SidebarLink>
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
