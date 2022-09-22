import React from 'react';
import { useState } from 'react';
import appartmentData from '../../data/logements.json';
import Collapse from '../../components/Collapse';
import './index.css';

function About() {
	const [ expandService, setExpandService ] = useState(false);
	const [ expandResponsabilty, setExpandResponsability ] = useState(false);
	const [ expandRespect, setExpandRespect ] = useState(false);
	const [ expandFiability, setExpandFiability ] = useState(false);

	const fiabiliteText = appartmentData.apropos.fiabilite;
	const respectText = appartmentData.apropos.respect;
	const responsabilityText = appartmentData.apropos.responsabilite;
	const serviceText = appartmentData.apropos.service;

	return (
		<section className="about-wrapper">
			<div className="page-image"></div>
			<div className="collapsers-container">
				{/* First Collapse */}
				<Collapse
					title="Fiabilité"
					text={fiabiliteText}
					expanded={expandFiability}
					setExpanded={setExpandFiability}
				/>
				{/* Second Collapse */}
				<Collapse title="Respect" text={respectText} expanded={expandRespect} setExpanded={setExpandRespect} />
				{/* Third Collapse */}
				<Collapse title="Service" text={serviceText} expanded={expandService} setExpanded={setExpandService} />
				{/* Fourth  Collapse */}
				<Collapse
					title="Responsabilité"
					text={responsabilityText}
					expanded={expandResponsabilty}
					setExpanded={setExpandResponsability}
				/>
			</div>
		</section>
	);
}

export default About;
