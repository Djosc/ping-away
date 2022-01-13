import React, { useEffect } from 'react';
import {
	Section,
	Container,
	ColumnLeft,
	ColumnRight,
	BtnWrap,
	Heading,
} from './ProjectSectionElements';
import { Button } from '../Button/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectSection = ({
	heading,
	paragraphOne,
	liveLinkLabel,
	liveLink,
	githubLinkLabel,
	githubLink,
	image,
	reverse,
	dark,
	primary,
	dataAOS,
	firstSection,
}) => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	const openDemo = () => {
		const url = liveLink;
		window.open(url, '_blank');
	};

	const openGitHub = () => {
		const url = githubLink;
		window.open(url, '_blank');
	};

	return (
		<Section id="projects" dark={dark}>
			<div data-aos={dataAOS}>
				{firstSection ? <Heading>Projects I've Completed</Heading> : <></>}

				<Container>
					<ColumnLeft reverse={reverse} dark={dark}>
						<h1>{heading}</h1>
						<p>{paragraphOne}</p>
						<BtnWrap>
							<Button to="/" onClick={openDemo} big="true" primary={primary}>
								{liveLinkLabel}
							</Button>
							<Button to="/" onClick={openGitHub} big="true" primary={primary}>
								{githubLinkLabel}
							</Button>
						</BtnWrap>
					</ColumnLeft>
					<ColumnRight reverse={reverse}>
						<img src={image} alt="art" />
					</ColumnRight>
				</Container>
			</div>
		</Section>
	);
};

export default ProjectSection;
