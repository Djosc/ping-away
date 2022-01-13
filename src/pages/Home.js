import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/MainSection/Main';
import ProjectSection from '../components/InfoSection/InfoSection';
import Footer from '../components/Footer/Footer';

import { ProjectData, ProjectDataTwo } from '../data/InfoData';

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
			<ProjectSection {...ProjectData} dataAOS={'fade-up'} firstSection={true} />
			<ProjectSection {...ProjectDataTwo} dataAOS={'fade-up'} firstSection={false} />
			{/* <ProjectSection {...ProjectDataTwo} dataAOS={'fade-right'} /> */}
			<Footer />
		</>
	);
};

export default Home;
