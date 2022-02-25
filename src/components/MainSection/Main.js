import React, { useState, useEffect } from 'react';
import {
	MainContainer,
	MainBg,
	VideoBg,
	ImageBg,
	MainColumnLeft,
	MainColumnRight,
	MainBtnWrap,
	EmailInput,
	VideoButton,
} from './MainElements';

import video from '../../videos/video1.mp4';
import bgImage from '../../images/pingpong.jpg';
import { Button } from '../Button/Button';

import { AiOutlinePlayCircle } from 'react-icons/ai';

import VideoModal from '../VideoModal/VideoModal';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
	const [openModal, setOpenModal] = useState(false);
	const [hover, setHover] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 5000 });
	}, []);

	const onModal = () => {
		setOpenModal(!openModal);
	};

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<MainContainer>
				{openModal ? <VideoModal closeModal={onModal} /> : <></>}
				<MainBg className="spacer layer1">{/* <ImageBg src={bgImage} /> */}</MainBg>
				<MainColumnLeft>
					<h1 style={{ fontSize: '64px', fontFamily: 'Indonesia-script' }}>Ping-Away</h1>
					<p>This product is amazing wow, so much saved space</p>
					<MainBtnWrap>
						<EmailInput placeholder="Your best E-mail..."></EmailInput>
						<Button big={'true'}>Be The First To Know</Button>
					</MainBtnWrap>
					<VideoButton onClick={onModal}>
						Watch Our Video{' '}
						<AiOutlinePlayCircle
							style={{ marginLeft: '1rem', fontSize: '42px' }}
						></AiOutlinePlayCircle>
					</VideoButton>
				</MainColumnLeft>
				{/* <MainColumnRight></MainColumnRight> */}
				{/* <DiscoverMore to="features" spy={true} smooth={true} offset={-74} duration={500}>
					<h1>Discover More</h1>
					<DownArrow></DownArrow>
				</DiscoverMore> */}
			</MainContainer>
		</>
	);
};

export default Main;
