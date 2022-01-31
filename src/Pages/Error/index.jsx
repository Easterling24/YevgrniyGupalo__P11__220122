import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import errorMsg from '../../assets/404.png';

const ErrorWrapper = styled.div`
	margin-top: 5rem;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	color: #f7694a;
	margin-bottom:2rem;
	min-height: 70vh;
`;

const WrapperErrorMessage = styled.div
`
display:flex;
flex-direction:column;
align-items:center;

`

const Error404 = styled.div`

display:flex;
justify-content: center;
align-items:center;
margin-bottom: 5rem;

@media (max-width: 560px){
	> img{
		width: 300px;
	}
}



`;

const ErrorImg = styled.img``;

const ErrorMsg = styled.h1`
width: 100%;
text-align:center;
`;

const BackToHome = styled(Link)`
text-decoration:none;
color: #F7694A;
border-bottom: 1px solid #F7694A;
margin-bottom:8rem;


`;

function Error() {
	return (
		<ErrorWrapper>
			<WrapperErrorMessage>
				<Error404>
					<ErrorImg src={errorMsg} />
				</Error404>

				<ErrorMsg>Oups! La page que vous demandez n'existe pas.</ErrorMsg>
			</WrapperErrorMessage>

			<BackToHome to="/">Retourner sur la page d'accueil</BackToHome>
		</ErrorWrapper>
	);
}

export default Error;
