import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';

export const ModalBg = styled.div`
	background: rgba(0, 0, 0, 0.8);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	/* height: 100vh; */
	height: 100%;
	z-index: 995;
`;
export const ModalContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 996;
`;
export const ModalVideo = styled.video`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 90%;
	z-index: 997;
`;

export const ModalClose = styled(AiOutlineClose)`
	cursor: pointer;
	color: #fff;
	position: absolute;
	right: 2%;
	top: 3%;
	height: 50px;
	width: 50px;
	z-index: 998;
`;
