import styled from 'styled-components';
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';
import { Link as LinkS } from 'react-scroll';

const colors = {
	primary: '#000',
	secondary: '#2b2b2b',
	primaryAccent: '#ff0000',
	secondaryAccent: '#dbdbdb',
	tertiaryAccent: '#fff',
};

export const MainContainer = styled.div`
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 85vh;
	top: 0;
	overflow: hidden;
`;

export const MainBg = styled.div`
	position: fixed;
	/* position: absolute; */
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
`;

export const ImageBg = styled.img`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
`;

export const MainColumnLeft = styled.div`
	/* position: absolute; */
	/* left: 4rem; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.4;
	z-index: 5;
	margin-bottom: 8rem;
	/* margin-right: 15em; */

	h1 {
		text-align: center;
		margin-bottom: 1rem;
		font-size: 2.5rem;
		color: #fff;
	}

	p {
		padding-bottom: 0;
		text-align: center;
		font-size: 1.7rem;
		color: #fff;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
`;

export const MainColumnRight = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.4;
	z-index: 5;
	margin-bottom: 8rem;
`;

export const MainBtnWrap = styled.div`
	margin-top: 32px;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	z-index: 5;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const EmailInput = styled.input`
	max-width: 320px;
	font-size: 19px;
	padding: 1rem 1rem;
	border: 2px solid black;
	margin-right: 0.7rem;
	margin-left: 0.7rem;

	@media screen and (max-width: 768px) {
		font-size: 15px;
		padding: 0.6rem 1rem;
		margin-bottom: 0.5rem;
	}
`;

export const DiscoverMore = styled(LinkS)`
	color: #fff;
	cursor: pointer;
	position: absolute;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	bottom: 0;
	margin-bottom: 2rem;
	font-size: 12px;

	&:hover {
		transform: translateY(-4px);
	}

	@media screen and (max-width: 768px) {
		font-size: 8px;
	}
`;

// export const DownArrow = styled(BsArrowDown)`
// 	height: 50px;
// 	width: 50px;
// `;

export const VideoButton = styled.button`
	background: ${colors.primaryAccent};
	color: ${colors.tertiaryAccent};
	margin-top: 2rem;
	width: 50%;
	border-radius: 50px;
	border: 1px solid black;
	white-space: nowrap;
	outline: none;
	min-width: 150px;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 0.7rem;
	margin-left: 0.7rem;
	padding: 7px 29px;
	font-size: 18px;
	transition: 0.3s ease-in-out;

	&:hover {
		background: ${colors.secondary};
		/* color: ${colors.tertiaryAccent}; */
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
		padding: 7px 20px;
	}
`;
