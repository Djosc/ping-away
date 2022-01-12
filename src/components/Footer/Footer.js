import React from 'react';

import {
	FooterContainer,
	FooterWrap,
	FooterInfo,
	FooterLinksWrap,
	FooterLinkItems,
	FooterLink,
	FooterContactWrap,
	FooterContact,
	FormLabel,
	FormInput,
	FormInputArea,
	FormH1,
	BtnWrap,
} from './FooterElements';

import gitHubIcon from '../../images/githubIcon.svg';
import linkedInIcon from '../../images/linkedinIcon.svg';
import { Button } from '../Button/Button';

const Footer = () => {
	const openGitHub = () => {
		const url = 'https://github.com/Djosc';
		window.open(url, '_blank');
	};
	const openLinkedIn = () => {
		const url = 'https://www.linkedin.com/in/david-caldwell-4663b9205/';
		window.open(url, '_blank');
	};
	return (
		<>
			<FooterContainer id="contact">
				<FooterWrap>
					<FooterInfo>
						<h1>Need to talk to me?</h1>
						<p>I would love to hear from you.</p>
					</FooterInfo>
					<FooterContactWrap>
						<FooterContact>
							<FormH1>Send me an email</FormH1>
							<FormInput type="text" placeholder="Name" name="name" />
							<FormInput type="email" placeholder="Email" name="email" />
							<FormInput type="text" placeholder="Subject" name="subject" />
							<FormInputArea type="text" placeholder="Message" name="message" />
							<BtnWrap>
								<Button primary="true" dark="true" big="true">
									Send
								</Button>
							</BtnWrap>
						</FooterContact>
					</FooterContactWrap>
				</FooterWrap>
				<FooterLinksWrap>
					<FooterLinkItems>
						<FooterLink src={gitHubIcon} onClick={openGitHub}></FooterLink>
						<FooterLink src={linkedInIcon} onClick={openLinkedIn}></FooterLink>
					</FooterLinkItems>
				</FooterLinksWrap>
			</FooterContainer>
		</>
	);
};

export default Footer;
