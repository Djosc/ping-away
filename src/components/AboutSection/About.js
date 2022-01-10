import React, { useEffect } from 'react';

import {
	AboutSection,
	AboutContainer,
	AboutColumnLeft,
	AboutColumnRight,
	ImageWrap,
} from './AboutElements';

import { Tooltip } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../../images/html5Icon.svg';
import image2 from '../../images/css3Icon.svg';
import image3 from '../../images/javascriptIcon.svg';
import image4 from '../../images/reactIcon.svg';
import image5 from '../../images/nodejsIcon.svg';
import image6 from '../../images/mongodbIcon.svg';

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 5000 });
	}, []);

	return (
		<>
			<AboutSection id="about">
				<AboutContainer>
					<AboutColumnLeft data-aos="fade-right">
						<h1>About Me</h1>
						<p>
							Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
							Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
							Ipsum
						</p>
					</AboutColumnLeft>
					<AboutColumnRight data-aos="fade-left">
						<h1>Technologies I Use</h1>
						<ImageWrap>
							<Tooltip title="HTML5">
								<img src={image1} alt="" />
							</Tooltip>
							<Tooltip title="CSS3">
								<img src={image2} alt="" />
							</Tooltip>
							<Tooltip title="Javascript">
								<img src={image3} alt="" />
							</Tooltip>
							<Tooltip title="React">
								<img src={image4} alt="" />
							</Tooltip>
							<Tooltip title="Node.js">
								<img src={image5} alt="" />
							</Tooltip>
							<Tooltip title="MongoDB">
								<img src={image6} alt="" />
							</Tooltip>
						</ImageWrap>
					</AboutColumnRight>
				</AboutContainer>
			</AboutSection>
		</>
	);
};

export default About;
