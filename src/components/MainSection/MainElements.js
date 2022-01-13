import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

export const MainContainer = styled.div`
	background: #000;
	top: -80px;
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
	height: 111vh;
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

export const MainColumnLeft = styled.div`
	position: absolute;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.4;
	z-index: 5;
	margin-bottom: 5em;
	/* margin-right: 15em; */

	h1 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: clamp(2rem, 8vw, 4rem);
		color: #fff;
	}

	p {
		font-size: clamp(0.4rem, 4vw, 1.5rem);
		color: #fff;
	}

	@media screen and (max-width: 1280px) {
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media screen and (max-width: 768px) {
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const MainH1 = styled.h1`
	color: #fff;
	font-size: 52px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 34px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const MainH2 = styled.h1`
	color: #000;
	font-size: 52px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 34px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
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
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	z-index: 5;
`;

export const DefaultArrow = styled(BsArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

export const RightArrow = styled(BsArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
