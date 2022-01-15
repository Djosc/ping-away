import React from 'react';

import { ModalBg, ModalContainer, ModalVideo, ModalClose } from './VideoModalElements';
import video from '../../videos/video1.mp4';

const VideoModal = ({ closeModal }) => {
	return (
		<>
			<ModalBg id="bg">
				<ModalContainer>
					<ModalClose onClick={closeModal}></ModalClose>
					<ModalVideo src={video} controls>
						{/* <source src={video} autoplay type="video/mp4" /> */}
					</ModalVideo>
				</ModalContainer>
			</ModalBg>
		</>
	);
};

export default VideoModal;
