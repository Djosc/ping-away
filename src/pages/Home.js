import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/MainSection/Main';
import InfoSection from '../components/InfoSection/InfoSection';

import { InfoData, InfoDataTwo } from '../data/InfoData';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Main />

			<InfoSection {...InfoData} dataAOS={'fade-left'} />
			<InfoSection {...InfoDataTwo} dataAOS={'fade-right'} />
		</>
	);
};

export default Home;
