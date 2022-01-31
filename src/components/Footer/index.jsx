import React from 'react';
import logoFooter from '../../assets/logofooter.svg';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
	color: #fff;
	height: 209px;
	padding-top: 1rem;

	@media (max-width: 560px) {
		padding: 40px;
	}
`;

const CopyRight = styled.p`
	font-size: 15px;

	@media (max-width:560px) {
		font-size: 10px;
	}
`;

const LogoContainer = styled.div`
	width: 122px;
	height: 40px;
	@media (max-width:560px) {
		height: 30px;
		width: 150px;
		text-align:center;
	}
	
`;

function Footer() {
	return (
		<FooterWrapper>
			<LogoContainer>
				<img src={logoFooter} alt={'logo footer'} />
			</LogoContainer>
			<CopyRight>&copy; 2020 Kasa. All rights reserved</CopyRight>
		</FooterWrapper>
	);
}

export default Footer;
