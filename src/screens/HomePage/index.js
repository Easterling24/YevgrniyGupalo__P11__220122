import React from 'react';
import dataApartments from '../../data/logements.json';
import AppartmentCard from '../../components/Card';
import { NavLink as Link } from 'react-router-dom';
import './index.css';

function HomePage() {
	return (
		<section className="home-wrapper">
			<div className="home-title">
				<div className="backgorund-title">
					<h2>Chez vous, partout et ailleurs</h2>
				</div>
			</div>

			<div className="home-page-wrapper">
				{dataApartments.logements.map((item) => (
					<Link className="card-link" key={item.id} to={`/flat-detail/${item.id}`}>
						<AppartmentCard title={item.title} cover={item.cover} />
					</Link>
				))}
			</div>
		</section>
	);
}

export default HomePage;
