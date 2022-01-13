import React, { useState, useEffect } from 'react';
import {
	MainContainer,
	MainBg,
	VideoBg,
	ImageBg,
	MainColumnLeft,
	MainColumnRight,
	MainPortrait,
	MainH1,
	MainH2,
	MainBtnWrap,
	DefaultArrow,
	RightArrow,
} from './MainElements';

import video from '../../videos/video1.mp4';
// import bgImage from '../../images/black-sand.jpg';
// import bgImage from '../../images/greyBg.jpg';
import bgImage from '../../images/pingpong.jpg';
import portrait from '../../images/linkedin-image-redux.jpg';
import { Button } from '../Button/Button';
import mainImage from '../../images/data.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
	const [hover, setHover] = useState(false);
	const [hover2, setHover2] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 5000 });
	}, []);

	const onHover = () => {
		setHover(!hover);
	};

	const onHover2 = () => {
		setHover2(!hover2);
	};

	return (
		<>
			<MainContainer>
				<MainBg>
					{/* <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg> */}
					<ImageBg src={bgImage} />
				</MainBg>
				<MainColumnLeft>
					<h1>An Exciting New Product</h1>
					<MainBtnWrap>
						<Button
							to="projects"
							spy={true}
							smooth={true}
							offset={-77}
							duration={500}
							primary={'true'}
							big={'true'}
							onMouseEnter={onHover}
							onMouseLeave={onHover}
						>
							Learn More {hover ? <RightArrow></RightArrow> : <></>}
						</Button>
						<Button
							to="projects"
							spy={true}
							smooth={true}
							offset={-77}
							duration={500}
							primary={'true'}
							big={'true'}
							onMouseEnter={onHover2}
							onMouseLeave={onHover2}
						>
							Sign up for our Newsletter{hover2 ? <RightArrow></RightArrow> : <></>}
						</Button>
					</MainBtnWrap>
				</MainColumnLeft>
				{/* <MainPortrait src={portrait} /> */}
				{/* <div data-aos="fade-down-left"> */}
				{/* </div> */}
				{/* <div data-aos="fade-down-right"> */}
				{/* </div> */}
			</MainContainer>
		</>
	);
};

export default Main;
