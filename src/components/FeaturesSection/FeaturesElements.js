import styled from 'styled-components';

import { BiAperture, BiAbacus, BiBarChartAlt, BiBroadcast } from 'react-icons/bi';

export const Heading = styled.h1`
	text-align: center;
	font-weight: bold;
	font-size: 34px;
	padding-top: 3rem;
	margin-bottom: -32px;

	@media screen and (max-width: 768px) {
		font-size: 26px;
	}
`;

export const Section = styled.section`
	width: 100%;
	/* height: auto; */
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 700px;
	align-items: center;
	grid-gap: 4rem;

	@media screen and (max-width: 960px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-gap: 0rem;
	}
`;
export const ColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 960px) {
		flex-direction: row;
	}
`;

export const IconDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	text-align: center;
`;

export const LeftImage1 = styled(BiAperture)`
	width: 100px;
	height: 100px;
	margin: 2rem 2rem;

	@media screen and (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;
export const LeftImage2 = styled(BiAbacus)`
	width: 100px;
	height: 100px;
	margin: 2rem 2rem;

	@media screen and (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

export const ColumnMiddle = styled.div`
	align-items: center;
	text-align: center;

	img {
		width: 400px;
		height: 600px;
	}

	@media screen and (max-width: 960px) {
		img {
			width: 300px;
			height: 450px;
		}
	}

	@media screen and (max-width: 768px) {
		img {
			width: 200px;
			height: 300px;
		}
	}
`;

export const ColumnRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 960px) {
		flex-direction: row;
	}
`;

export const RightImage1 = styled(BiBarChartAlt)`
	width: 100px;
	height: 100px;
	margin: 2rem 2rem;

	@media screen and (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

export const RightImage2 = styled(BiBroadcast)`
	width: 100px;
	height: 100px;
	margin: 2rem 2rem;

	@media screen and (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;
