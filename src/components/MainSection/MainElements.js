import styled from 'styled-components';

export const MainContainer = styled.div`
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 1100px;
	position: relative;
	z-index: -1;
`;

export const MainBg = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-attachment: fixed;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;
