import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/MainSection/Main';
import InfoSection from '../components/InfoSection/InfoSection';

import { InfoData, InfoDataTwo } from '../data/InfoData';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Main />
			<div data-aos="fade-left">
				<InfoSection {...InfoData} />
			</div>
			<div data-aos="fade-right">
				<InfoSection {...InfoDataTwo} />
			</div>
		</>
	);
};

export default Home;
