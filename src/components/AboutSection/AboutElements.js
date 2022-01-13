import styled from 'styled-components';

export const AboutSection = styled.div`
	width: 100%;
	height: 100%;
	padding: 1rem 0rem;
`;

export const AboutContainer = styled.div`
	padding: 2rem calc((100vw - 1300px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 8rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;

		grid-template-rows: 1fr 1fr;
		padding: 2rem;
		grid-gap: 1rem;
	}
`;

export const AboutColumnLeft = styled.div`
	h1 {
		text-align: center;
		padding-bottom: 2rem;
	}
	p {
		text-align: center;
		line-height: 2;
		font-size: 22px;
	}
`;

export const AboutColumnRight = styled.div`
	h1 {
		text-align: center;
		padding-bottom: 2rem;
	}
`;

export const ImageWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	img {
		width: 150px;
		height: 150px;
		padding: 1rem 1rem;

		&:hover {
			transform: translateY(-3px);
		}
	}
`;
