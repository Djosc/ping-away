import React from 'react';
import { MainContainer, MainBg, VideoBg } from './MainElements';
import video from '../../videos/video1.mp4';

const Main = () => {
	return (
		<>
			<MainContainer>
				<MainBg>
					<VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
				</MainBg>
			</MainContainer>
		</>
	);
};

export default Main;
