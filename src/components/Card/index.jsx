import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`

	margin: 2rem 0;
	height: 340px;
	width: 340px;
	border-radius: 10px;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
	display: flex;
	justify-content: flex-end;
	flex-direction: column;

	position:relative;

	color: #fff;
	transition: 200ms;
	&:hover {
        cursor: pointer;
        box-shadow: 5px 5px 15px #9ea0a8;
    }
`;


const PlaceCover = styled.img`
object-fit:cover;
opacity: 0.8;
width: 100%;
height: 100%;
border-radius: 10px;
background: rgba(0,0,0,0.4);
`

const CardTitle = styled.h3`
width: 100%;
height: 100%;
font-size: 20px;

position:absolute;
font-weight: 600;	
display:flex;
flex-direction:column;
justify-content:flex-end;
padding: 0 0 40px 20px;
`;

function AppartmentCard({ title, cover}) {
	return (
		<CardWrapper>

			<PlaceCover src={cover} alt={title} />
			<CardTitle>{title}</CardTitle>
		</CardWrapper>
	);
}

export default AppartmentCard;
