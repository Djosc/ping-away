import React, { useState } from 'react';
import {
	MainContainer,
	MainBg,
	VideoBg,
	ImageBg,
	MainContent,
	MainPortrait,
	MainH1,
	MainBtnWrap,
	DefaultArrow,
	RightArrow,
} from './MainElements';

import video from '../../videos/video1.mp4';
// import bgImage from '../../images/black-sand.jpg';
import bgImage from '../../images/grayBg.jpg';
import portrait from '../../images/linkedin-image-redux.jpg';
import { Button } from '../Button/Button';

const Main = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<MainContainer>
				<MainBg>
					{/* <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg> */}
					<ImageBg src={bgImage} />
				</MainBg>
				<MainContent>
					{/* <MainPortrait src={portrait} /> */}
					<MainH1>David Caldwell</MainH1>
					<MainH1>Web Developer</MainH1>
					<MainBtnWrap>
						<Button
							// to="projects"
							to="/"
							primary={'true'}
							big={'true'}
							onMouseEnter={onHover}
							onMouseLeave={onHover}
						>
							See My Projects {hover ? <RightArrow /> : <></>}
						</Button>
					</MainBtnWrap>
				</MainContent>
			</MainContainer>
		</>
	);
};

export default Main;
