import React from 'react';
import { Section, Container, ColumnLeft, ColumnRight } from './InfoElements';
import { Button } from '../Button/Button';

const InfoSection = ({
	heading,
	paragraphOne,
	paragraphTwo,
	buttonLabel,
	image,
	reverse,
}) => {
	return (
		<Section>
			<Container>
				<ColumnLeft reverse={reverse}>
					<h1>{heading}</h1>
					<p>{paragraphOne}</p>
					<p>{paragraphTwo}</p>
					{/* ADD ROUTES */}
					<Button to="/">{buttonLabel}</Button>
				</ColumnLeft>
				<ColumnRight reverse={reverse}>
					<img src={image} alt="art" />
				</ColumnRight>
			</Container>
		</Section>
	);
};

export default InfoSection;
