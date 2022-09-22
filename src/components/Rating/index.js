import React from 'react';
import styled from 'styled-components';
import starFill from '../../assets/starfill.svg';
import starNotFilled from '../../assets/starnot.svg';

const RatingWrapper = styled.div`

font-size: 30px;
> span{
	margin 0 1rem 0 0;
}

@media (max-width: 560px){
	
	> span{
		margin: 0 0.2rem 0 0;
		> img{
			height:20px;
			width:20px;
		}
	}
}

`;

function Rating({ value, color }) {
	return (
		<RatingWrapper>
			<span>
				<img style={{ color }} src={value >= 1 ? starFill : starNotFilled} alt={'star'} />
			</span>
			<span>
				<img style={{ color }} src={value >= 2 ? starFill : starNotFilled} alt={'star'} />
			</span>
			<span>
				<img style={{ color }} src={value >= 3 ? starFill : starNotFilled} alt={'star'} />
			</span>
			<span>
				<img style={{ color }} src={value >= 4 ? starFill : starNotFilled} alt={'star'} />
			</span>
			<span>
				<img style={{ color }} src={value >= 5 ? starFill : starNotFilled} alt={'star'} />
			</span>
		</RatingWrapper>
	);
}

export default Rating;
