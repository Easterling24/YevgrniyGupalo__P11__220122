import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useState } from 'react';
import bground from '../../assets/backgroundAbout.png';
import appartmentData from '../../data/logements.json';

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	color: #ff6060;
	padding: 0 1rem;
	
	
	@media (max-width: 560px){
		
	
	}
`;

const PageImage = styled.div`
	width: 100%;
	height: 223px;
	border-radius: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 48px;
	line-height: 142.6%;
	color: #fff;
	position: relative;
	mix-blend-mode: darken;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${bground});
	background-repeat: no-repeat;
`;

// Collapse Wrappers & Animations

const collapseMove = keyframes`

0%{transform: translateY(-50px)};
100%{transform: translateY(0px)};

`;

const CollapseWrapper = styled.div`
	display: flex;
	flex-direction: column;npm 
	align-items: flex-start;
	height:${props => props.expanded ? "80vh": "60vh"};
	width: 70%;
	margin: 2rem 0 0 0;


	@media (max-width: 560px){
		width: 100%;
		height:${props => props.expanded ? "120vh": "50vh"};
	}
`;

const FirstCollapseWrapper = styled.div`
	width: 100%;
	height: ${(props) => (props.expanded ? '150px' : '47px')};
	margin-bottom: 2rem;
	@media (max-width: 560px){
		height: ${(props) => (props.expanded ? '200px' : '47px')};
	}
`;

const SecondCollapseWrapper = styled.div`
	width: 100%;
	height: ${(props) => (props.expanded ? '150px' : '47px')};
	margin-bottom: 2rem;
	@media (max-width: 560px){
		height: ${(props) => (props.expanded ? '200px' : '47px')};
	}
`;

const ThirdCollapseWrapper = styled.div`
	width: 100%;
	height: ${(props) => (props.expanded ? '150px' : '47px')};
	margin-bottom: 2rem;
	@media (max-width: 560px){
		height: ${(props) => (props.expanded ? '200px' : '47px')};
	}
`;

const FourthCollapseWrapper = styled.div`
	width: 100%;
	height: ${(props) => (props.expanded ? '200px' : '47px')};
	margin-bottom: 2rem;
	@media (max-width: 560px){
		height: ${(props) => (props.expanded ? '300px' : '47px')};
	}
`;

const FirstCollapse = styled.div`
	width: 100%;
	height: 47px;
	border-radius: 5px;
	background-color: #ff6060;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	position: relative;
	color: #fff;
`;

const FirstCollapseContent = styled.div`
	padding: 20px;
	width: 100%;
	background: #f6f6f6;
	color: #ff6060;
	top: 100%;
	left: 0;
	right: 0;
	position: absolute;
	transition: all 300ms ease-in-out;
	overflow: hidden;
	transform-origin: top;
	animation: ${collapseMove} 600ms 0ms both;
	z-index: -999;
`;

const SecondCollapse = styled.div`
	width: 100%;
	height: 47px;
	border-radius: 5px;
	background-color: #ff6060;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 0 1rem;
	color: #fff;
`;

const SecondCollapseContent = styled.div`
	padding: 20px;
	width: 100%;
	background: #f6f6f6;
	color: #ff6060;
	top: 100%;
	left: 0;
	right: 0;
	position: absolute;
	transition: all 300ms ease-in-out;
	overflow: hidden;
	animation: ${collapseMove} 600ms 0ms both;
	z-index: -999;
`;

const ThirdCollapse = styled.div`
	width: 100%;
	height: 47px;
	border-radius: 5px;
	background-color: #ff6060;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 0 1rem;
	color: #fff;
`;

const ThirdCollapseContent = styled.div`
	padding: 20px;
	width: 100%;
	background: #f6f6f6;
	color: #ff6060;
	top: 100%;
	left: 0;
	right: 0;
	position: absolute;
	transition: all 300ms ease-in-out;
	overflow: hidden;
	animation: ${collapseMove} 600ms 0ms both;
	z-index: -999;
`;

const FourthCollapse = styled.div`
	width: 100%;
	height: 47px;
	border-radius: 5px;
	background-color: #ff6060;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 0 1rem;
	color: #fff;
`;

const FourthCollapseContent = styled.div`
	padding: 20px;
	width: 100%;
	background: #f6f6f6;
	color: #ff6060;
	top: 100%;
	left: 0;
	right: 0;
	position: absolute;
	transition: all 300ms ease-in-out;
	overflow: hidden;
	animation: ${collapseMove} 600ms 0ms both;
	z-index: -999;
`;

function About() {
	// Fiabilité
	const [ reliability, setReliability ] = useState(appartmentData.apropos.fiabilite);
	const [ expandReliability, setExpandReliabiltiy ] = useState(false);

	// Respect
	const [ respect, setRespect ] = useState(appartmentData.apropos.respect);
	const [ expandRespect, setExpandRespect ] = useState(false);

	//Service
	const [ service, setService ] = useState(appartmentData.apropos.service);
	const [ expandService, setExpandService ] = useState(false);

	// Resposabilité
	const [ responsabilty, setResponsability ] = useState(appartmentData.apropos.responsabilite);
	const [ expandResponsability, setExpandResponsability ] = useState(false);

	// Expanding Reliability collapse content
	const reliabilityData = () => {
		setReliability(reliability);
		setExpandReliabiltiy(true);
	};

	const handleReliability = () => {
		if (expandReliability) {
			setExpandReliabiltiy(false);
		} else {
			reliabilityData();
		}
	};

	// Expanding Respect collapse content

	const respectData = () => {
		setRespect(respect);
		setExpandRespect(true);
	};

	const handleRespect = () => {
		if (expandRespect) {
			setExpandRespect(false);
		} else {
			respectData();
		}
	};

	// Expanding Service collapse content

	const serviceData = () => {
		setService(service);
		setExpandService(true);
	};

	const handleService = () => {
		if (expandService) {
			setExpandService(false);
		} else {
			serviceData();
		}
	};

	// Expanding Responsability collapse content

	const responsabiltyData = () => {
		setResponsability(responsabilty);
		setExpandResponsability(true);
	};

	const handleResponsability = () => {
		if (expandResponsability) {
			setExpandResponsability(false);
		} else {
			responsabiltyData();
		}
	};

	return (
		<AboutWrapper>
			<PageImage />
			{/* Wrapper Containing Collapsible Menus */}

			<CollapseWrapper expanded={expandResponsability || expandReliability || expandRespect || expandService}>
				<FirstCollapseWrapper expanded={expandReliability}>
					<FirstCollapse onClick={() => handleReliability()}>
						<p>Fiabilité</p>

						{expandReliability ? (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-up" />
						) : (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-down" />
						)}

						{expandReliability && reliability ? (
							<FirstCollapseContent>{reliability}</FirstCollapseContent>
						) : null}
					</FirstCollapse>
				</FirstCollapseWrapper>

				<SecondCollapseWrapper expanded={expandRespect}>
					<SecondCollapse  onClick={() => handleRespect()}>
						<p>Respect</p>

						{expandRespect ? (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-up" />
						) : (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-down" />
						)}

						{expandRespect && respect ? <SecondCollapseContent>{respect}</SecondCollapseContent> : null}
					</SecondCollapse>
				</SecondCollapseWrapper>

				<ThirdCollapseWrapper expanded={expandService}>
					<ThirdCollapse onClick={() => handleService()}>
						<p>Service</p>
						{expandService ? (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-up" />
						) : (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-down" />
						)}

						{expandService && service ? <ThirdCollapseContent>{service}</ThirdCollapseContent> : null}
					</ThirdCollapse>
				</ThirdCollapseWrapper>

				<FourthCollapseWrapper expanded={expandResponsability}>
					<FourthCollapse onClick={() => handleResponsability()}>
						<p>Responsabilité</p>
						{expandResponsability ? (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-up" />
						) : (
							<i style={{ cursor: 'pointer' }} className="fas fa-chevron-down" />
						)}

						{expandResponsability && responsabilty ? (
							<FourthCollapseContent>{responsabilty}</FourthCollapseContent>
						) : null}
					</FourthCollapse>
				</FourthCollapseWrapper>
			</CollapseWrapper>
		</AboutWrapper>
	);
}

export default About;
