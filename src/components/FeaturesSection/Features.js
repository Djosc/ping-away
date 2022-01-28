import React from 'react';

import {
	Heading,
	Section,
	Container,
	ColumnLeft,
	ColumnMiddle,
	ColumnRight,
	LeftImage1,
	LeftImage2,
	RightImage1,
	RightImage2,
	IconDiv,
} from './FeaturesElements';

// import image from '../../images/build.svg';

const Features = () => {
	return (
		<div id="features">
			<Heading>Product Info</Heading>
			<Section>
				<Container>
					<ColumnLeft>
						<IconDiv>
							<LeftImage1 />
							<h1>Yo this is text</h1>
						</IconDiv>
						<IconDiv>
							<LeftImage2 />
							<h1>This is also text</h1>
						</IconDiv>
					</ColumnLeft>
					<ColumnMiddle>{/* <img src={image} alt="info image" /> */}</ColumnMiddle>
					<ColumnRight>
						<IconDiv>
							<RightImage1 />
							<h1>This is text</h1>
						</IconDiv>
						<IconDiv>
							<RightImage2 />
							<h1>This is text</h1>
						</IconDiv>
					</ColumnRight>
				</Container>
			</Section>
		</div>
	);
};

export default Features;
