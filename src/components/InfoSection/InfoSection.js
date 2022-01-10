import React, { useEffect } from 'react';
import { Section, Container, ColumnLeft, ColumnRight } from './InfoElements';
import { Button } from '../Button/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoSection = ({
	heading,
	paragraphOne,
	paragraphTwo,
	buttonLabel,
	image,
	reverse,
	dark,
	dataAOS,
}) => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<Section dark={dark}>
			<div data-aos={dataAOS}>
				<Container>
					<ColumnLeft reverse={reverse} dark={dark}>
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
			</div>
		</Section>
	);
};

export default InfoSection;
