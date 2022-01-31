import React from 'react';
import dataApartments from '../../data/logements.json';
import AppartmentCard from '../../components/Card';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import backgroundImg from '../../assets/mainbg.png';
const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const HomeTitle = styled.div`
	width: 100%;
	height: 223px;
	border-radius: 25px;
	margin-bottom: 4rem;
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
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${backgroundImg});
	background-repeat: no-repeat;

	@media (max-width: 560px) {
		width: 92%;
		margin: auto;
		border-radius: 10px;
		height: 111px;
		justify-content: flex-end;
		flex-direction: column;
		align-items: baseline;
	}
`;

const BackgroundTitle = styled.h2`
	position: absolute;
	font-weight: 600;
	font-size: 2.8rem;

	@media (max-width: 560px) {
		position:absolute;
		font-size: 20px;
		font-weight 400;
		left: 5%;
	}
`;

const HomePageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: #f7f7f7;
	padding-bottom: 40px;
	border-radius: 25px;
	margin-bottom: 3rem;

	@media (max-width: 560px) {
		padding-bottom: 40px;
		justify-content: center;
		background: none;
	}
`;

const StyledLink = styled(Link)`
text-decoration:none;
color: #fff;
width:340px;
height: 340px;
margin: 0.5rem;
position:relative;
`;

function HomePage() {
	return (
		<HomeWrapper>
			<HomeTitle>
				<BackgroundTitle>Chez vous, partout et ailleurs</BackgroundTitle>
			</HomeTitle>
			<HomePageWrapper>
				{dataApartments.logements.map((item) => (
					<StyledLink key={item.id} to={`/AppartmentDetails/${item.id}`}>
						<AppartmentCard title={item.title} cover={item.cover} />
					</StyledLink>
				))}
			</HomePageWrapper>
		</HomeWrapper>
	);
}

export default HomePage;
