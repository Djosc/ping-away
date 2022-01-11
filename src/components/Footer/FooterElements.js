import styled from 'styled-components';

export const FooterContainer = styled.div`
	background-color: #000;
`;

export const FooterWrap = styled.div`
	/* padding: 48px 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 1100px;
	margin: 0 auto; */
	padding: 4rem calc((100vw - 1500px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;

	@media screen and (max-width: 1280px) {
		padding: 4rem 4rem;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;

		grid-template-rows: 1fr;
	}
`;
export const FooterLinksWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 1100px;
	margin: 0 auto;
`;
export const FooterLinkItems = styled.div`
	margin: 0rem 1rem;
`;
export const FooterLink = styled.img`
	cursor: pointer;
	margin: 0rem 1rem;
	width: 70px;
	height: 70px;
`;
export const FooterContactWrap = styled.div`
	height: 100%;
	display: flex;
`;
export const FooterContact = styled.form`
	background: #fff;
	max-width: 600px;
	height: auto;
	width: 100%;
	display: grid;
	margin: 0 auto;
	padding: 80px 32px;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const FormH1 = styled.h1`
	color: #000;
	text-align: center;
	margin-top: -30px;
	margin-bottom: 40px;
`;

// export const FormLabel = styled.label`
// 	margin-bottom: 8px;
// 	font-size: 14px;
// 	color: #000;
// `;

export const FormInput = styled.input`
	padding: 1rem 1rem;
	margin-bottom: 2rem;
	border: 2px solid #000;
`;

export const FooterInfo = styled.div`
	color: #fff;
	align-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		text-align: center;
		font-size: 34px;
	}

	p {
		text-align: center;
		font-size: 26px;
	}

	@media screen and (max-width: 768px) {
		padding: 3rem 0rem;
	}
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
