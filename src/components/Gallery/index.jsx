import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
	width: 100%;
	height: 400px;
	border-radius: 25px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	@media (max-width: 560px) {
		height: 255px;
	}
`;

const GalleryImage = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	border-radius: 25px;
`;

const NavigationArrows = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	> i {
		font-size: 70px;
		color: #fff;

		transition: all 300ms;
		&:hover {
			color: #ff6060;
			cursor: pointer;
		}
	}
	@media (max-width: 560px) {
		i {
			font-size: 40px;
		}
	}
`;

const GalleryCounter = styled.p`
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	align-items: center;
	color: #fff;
	font-size: 1.5rem;
	bottom: 5%;
	z-index: -1;
`;

function Gallery({ props }) {
	const [ gallery ] = useState(props.pictures);

	// let current = gallery[0];
	// let currentIndex = gallery.indexOf(current);

	const [ index, setIndex ] = useState({
		i: 0
	});

	const moveToNext = () => {
		setIndex({ i: (index.i + 1) % gallery.length });

		console.log(index.i);
	};

	const moveToPrevious = () => {
		if (index.i === 0) {
			index.i = gallery.length;
		}

		setIndex({ i: index.i - 1 });

		console.log(index.i);
	};

	return (
		<GalleryWrapper>
			{gallery ? <GalleryImage src={gallery[index.i]} /> : null}

			{gallery.length > 0 ? (
				<NavigationArrows>
					<i onClick={() => moveToPrevious()} className="fas fa-chevron-left" />
					<i onClick={() => moveToNext()} className="fas fa-chevron-right" />
					<GalleryCounter> /</GalleryCounter>
				</NavigationArrows>
			) : null}
		</GalleryWrapper>
	);
}

export default Gallery;
