import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

export const MainContainer = styled.div`
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	/* height: 1100px; */
	height: 100vh;
	position: relative;
	/* z-index: 1; */
`;

export const MainBg = styled.div`
	/* position: fixed; */
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	/* background-attachment: fixed; */
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	/* background: #232a34; */
`;

export const ImageBg = styled.img`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
`;

export const MainContent = styled.div`
	z-index: 3;
	top: 30%;
	left: 15%;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 1280px) {
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const MainH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 34px;
	}

	@media screen and (max-width: 480px) {
		font-size: 28px;
	}
`;

export const MainPortrait = styled.img`
	width: 400px;
	height: 600px;
	border-radius: 50px;
`;

export const MainBtnWrap = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;

export const DefaultArrow = styled(BsArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

export const RightArrow = styled(BsArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
