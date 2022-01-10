import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	height: 100%;
	background: ${({ dark }) => (dark ? '#000' : '#fff')};
	padding: 1rem 0rem;
`;
export const Container = styled.div`
	padding: 2rem calc((100vw - 1300px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 800px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;

		grid-template-rows: 500px;
	}
`;
export const ColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	line-height: 1.4;
	padding: 1rem 2rem;
	order: ${({ reverse }) => (reverse ? '2' : '1')};

	h1 {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 6vw, 2rem);
		color: ${({ dark }) => (dark ? '#fff' : '#000')};
	}

	p {
		margin-bottom: 2rem;
		color: ${({ dark }) => (dark ? '#fff' : '#000')};
	}
`;

export const ColumnRight = styled.div`
	padding: 1rem 2rem;
	order: ${({ reverse }) => (reverse ? '1' : '2')};
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		order: ${({ reverse }) => (reverse ? '2' : '1')};
	}

	img {
		width: 100%;
		height: 100%;
		/* object-fit: cover; */

		@media screen and (max-width: 768px) {
			width: 90%;
			height: 70vh;
		}
	}
`;
