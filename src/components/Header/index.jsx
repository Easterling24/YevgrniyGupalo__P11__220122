import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import KasaLogo from '../../assets/kasa.svg';
import '../../style/links/Nav.css';

const NavContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Montserrat', sans-serif;

	@media (max-width: 560px) {
		
	}
`;

const HomeLogo = styled.img`
	height: 90px;
	padding: 15px;
	@media (max-width: 560px) {
		height: 70px;
	}
`;

const StyledLink = styled(Link)`
color: #FF6060;
text-decoration:none;
font-size:25px;
font-weight: 600;

@media (max-width: 560px) {

	font-size:15px;


	

}

`;

function Header() {
	return (
		<NavContainer>
			<Link to="/">
				<HomeLogo src={KasaLogo} />
			</Link>
			<ul>
				<StyledLink  to="/">Accueil</StyledLink>
				<StyledLink to="/about">A propos</StyledLink>
			</ul>
		</NavContainer>
	);
}

export default Header;
