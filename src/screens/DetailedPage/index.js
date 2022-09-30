import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../../style/fonts/fonts.css';
import Rating from '../../components/Rating';
import Gallery from '../../components/Gallery';
import ApartmentData from '../../data/logements.json';
import Collapse from '../../components/Collapse';
import NotFound from '../NotFound/index';
import './index.css';

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

function DetailedPage() {
	const { id } = useParams();

	let appartment = ApartmentData.logements.find((appart) => appart.id === id);

	/**** Checking if the id exists, if undefined , render a notfound component  with ternanry operator ****/
	let appartmentError = appartment === undefined;

	/***Retreiving data from the api***/
	const [ expandDescription, setExpandDescription ] = useState(false);
	const [ expandEquipment, setExpandEquipment ] = useState(false);

	return (
		<section className="main-wrapper">
			{appartmentError ? (
				<NotFound />
			) : (
				<section className="detail-wrapper">
					{/* Picture Gallery and Navigation */}

					<Gallery props={appartment} />

					{/* Ttile and Host Data */}
					<div className="detailed-card-wrapper">
						<div className="card-tags">
							<h1>{appartment.title}</h1>
							<p>{appartment.location}</p>

							<div className="detail-container">
								{appartment.tags.map((tag) => <p key={tag}>{tag}</p>)}
							</div>
						</div>

						<DetailedHostRating>
							<HostContainer>
								<h3>{appartment.host.name}</h3>
								<HostContainerPicture>
									<img src={appartment.host.picture} alt={appartment.host.name} />
								</HostContainerPicture>
							</HostContainer>
							<Rating value={appartment.rating} color={'#ff6060'} />
						</DetailedHostRating>
					</div>

					<div className="detailed-card-wrapper-lower">
						{/* First Collapsing Container */}
						<Collapse
							title="Description"
							text={appartment.description}
							expanded={expandDescription}
							setExpanded={setExpandDescription}
						/>

						{/* Second Collapsing Container */}
						<Collapse
							title="Equipements"
							text={appartment.equipments}
							expanded={expandEquipment}
							setExpanded={setExpandEquipment}
						/>
					</div>
				</section>
			)}
		</section>
	);
}

export default DetailedPage;
