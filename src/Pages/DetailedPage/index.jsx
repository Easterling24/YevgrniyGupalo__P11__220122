import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import '../../style/fonts/fonts.css';
import Rating from '../../components/Rating';
import Gallery from '../../components/Gallery';
import ApartmentData from '../../data/logements.json';

// Styling

const DetailedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	margin-bottom: 2rem;
	color: #ff6060;
	padding: 0 1rem;
	min-height: 75vh;
`;

const DetailedCardInfoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
`;

const DetailedCardLocationTags = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;

	> h1 {
		margin: 0;
	}
	@media (max-width: 560px) {
		width: 100%;
		h1 {
			font-weight: 600;
			font-size: 20px;
		}
	}
`;

const DetailedTagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	> p {
		padding: 5px 15px;
		font-size: 14px;
		background: #ff6060;
		color: #fff;
		border-radius: 10px;
		margin: 0 1rem 0 0;
	}

	@media (max-width: 560px) {
		p {
			font-size: 9px;
		}
	}
`;

const DetailedHostRating = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: end;

	@media (max-width: 560px) {
		flex-direction: row-reverse;
		align-items: center;
		width: 100%;
		margin-top: 1rem;
	}
`;

const HostContainer = styled.div`
	display: flex;
	align-items: center;
`;

const HostContainerPicture = styled.div`
	height: 64px;
	width: 64px;
	border-radius: 50%;
	margin-left: 1rem;
	> img {
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}
`;

// Collapseing menus

const DetailedCollapseContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 560px) {
		flex-direction: column;
		align-items: center;
	}
`;

// Collapsible menu with animation

const DescriptionWrapper = styled.div`
	width: 550px;
	height: ${(props) => (props.expanded ? '180px' : '1rem')};
	@media (max-width: 560px) {
		width: 100%;
		margin-bottom: 2rem;
		height: ${(props) => (props.expanded ? '120px' : '1rem')};
	}
`;

const EquipmentWrapper = styled.div`
	width: 550px;
	height: ${(props) => (props.expanded ? '270px' : '1rem')};
	@media (max-width: 560px) {
		width: 100%;
		height: 30px;
		height: ${(props) => (props.expanded ? '160px' : '1rem')};
	
`;

const DescriptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 52px;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;
	position: relative;
	background-color: #ff6060;
	transition: all 600ms ease-in-out;
	display: flex;
	align-items: center;
	padding: 0 15px;
	@media (max-width: 560px) {
		width: 100%;
		height: 30px;
	}
`;

// Animation

const collapseMove = keyframes`

0%{transform: translateY(-50px)};
100%{transform: translateY(0px)};

`;

const EquipmentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 52px;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;
	position: relative;
	background-color: #ff6060;
	display: flex;
	align-items: center;
	padding: 0 15px;

	@media (max-width: 560px) {
		width: 100%;
		height: 30px;
	}
`;

/*************/

const DescriptionExpanded = styled.div`
	position: absolute;
	display: block;
	top: 87%;
	left: 0;
	right: 0;
	background: #f6f6f6;
	color: #ff6060;
	border-radius: 0 0 10px 10px;
	padding: 20px;
	opacity: 1;
	z-index: 1;
	font-weight: 600;
	font-size: 18px;
	transform-origin: top;
	animation: ${collapseMove} 600ms 0ms both;
	z-index: -999;

	@media (max-width: 560px) {
		font-size: 12px;
	}
`;

const EquipmentExpanded = styled.div`
	display: flex;
	flex-direction: column;
	background: #f6f6f6;
	color: #ff6060;
	position: absolute;
	display: block;
	top: 87%;
	left: 0;
	right: 0;
	padding: 5px;
	border-radius: 0 0 10px 10px;
	animation: ${collapseMove} 600ms 0ms both;
	z-index: -999;
	> p {
		font-weight: 600;
		font-size: 18px;
		margin: 10px 0px;
	}

	@media (max-width: 560px) {
		p {
			font-size: 12px;
			margin: 0.5rem 0;
		}
	}
`;

function DetailedPage() {
	const { id } = useParams();
	let matchedId;

	ApartmentData.logements.forEach((item) => {
		if (item.id === id) {
			matchedId = item;
		}
	});

	const [ description, setDescription ] = useState(matchedId.description);
	const [ equipment, setEquipment ] = useState(matchedId.equipments);
	const [ expandDescription, setExpandDescription ] = useState(false);
	const [ expandEquipment, setExpandEquipment ] = useState(false);

	const getDescription = async () => {
		setDescription(description);
		setExpandDescription(true);
	};

	const getEquipment = async () => {
		setEquipment(equipment);
		setExpandEquipment(true);
	};

	// Description and Equipment

	const handleDescription = () => {
		if (expandDescription) {
			setExpandDescription(false);
		} else {
			getDescription();
		}
	};

	const handleEquipment = () => {
		if (expandEquipment) {
			setExpandEquipment(false);
		} else {
			getEquipment();
		}
	};

	return (
		<DetailedWrapper>
			{/* Picture Gallery and Navigation */}

			<Gallery props={matchedId} />

			{/* Ttile and Host Data */}
			<DetailedCardInfoWrapper>
				<DetailedCardLocationTags>
					<h1>{matchedId.title}</h1>
					<p>{matchedId.location}</p>

					<DetailedTagContainer>{matchedId.tags.map((tag) => <p key={tag}>{tag}</p>)}</DetailedTagContainer>
				</DetailedCardLocationTags>

				<DetailedHostRating>
					<HostContainer>
						<h3>{matchedId.host.name}</h3>
						<HostContainerPicture>
							<img src={matchedId.host.picture} alt={matchedId.host.name} />
						</HostContainerPicture>
					</HostContainer>
					<Rating value={matchedId.rating} color={'#ff6060'} />
				</DetailedHostRating>
			</DetailedCardInfoWrapper>

			{/* Description and Equipment Sections */}

			<DetailedCollapseContainer>
				<DescriptionWrapper expanded={expandDescription}>
					<DescriptionContainer expanded={expandDescription} onClick={() => handleDescription()}>
						<p>Description</p>

						{expandDescription ? (
							<i className="fas fa-chevron-up" />
						) : (
							<i className="fas fa-chevron-down" />
						)}
						{description && expandDescription ? (
							<DescriptionExpanded expanded={expandDescription}>{description}</DescriptionExpanded>
						) : null}
					</DescriptionContainer>
				</DescriptionWrapper>

				<EquipmentWrapper expanded={expandEquipment}>
					<EquipmentContainer onClick={() => handleEquipment()}>
						<p>Equipments</p>
						{expandEquipment ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />}
						{equipment && expandEquipment ? (
							<EquipmentExpanded>
								{equipment.map((equip) => <p key={equip}>{equip}</p>)}
							</EquipmentExpanded>
						) : null}
					</EquipmentContainer>
				</EquipmentWrapper>
			</DetailedCollapseContainer>
		</DetailedWrapper>
	);
}

export default DetailedPage;
