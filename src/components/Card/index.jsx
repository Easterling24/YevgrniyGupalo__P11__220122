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
	background: #ff6060

	color: #fff;
	transition: 200ms;
	&:hover {
        cursor: pointer;
        box-shadow: 5px 5px 15px #9ea0a8;
    }
`;


const PlaceCover = styled.img`
object-fit:cover;
width: 100%;
height: 100%;
border-radius: 10px;
`

const CardTitle = styled.h3`
width: 80%;
position:absolute;
left: 5%;
font-weight: 600;	
`;

function AppartmentCard({ title, cover}) {
	return (
		<CardWrapper>
			<CardTitle>{title}</CardTitle>
			<PlaceCover src={cover} alt={title} />
		</CardWrapper>
	);
}

export default AppartmentCard;
