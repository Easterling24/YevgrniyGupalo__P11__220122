import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';

/* Styles Components Section */
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
	display: ${(props) => (props.length === 0 ? 'none' : 'flex')};
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
	margin: auto;
	color: #fff;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
	bottom: 5%;
	z-index: 2;
	//
`;

function Gallery({ props }) {
	const [ gallery ] = useState(props.pictures);
	const [ selected, setSelected ] = useState(1);


	/* Transforming the original array so that the index starts with 1 instead of 0 */
	let newGalleryArray = [];
	let arrayIndex = 1;

	gallery.map((elt) => {
		newGalleryArray[arrayIndex] = elt;
		return arrayIndex++;
	});

	/* Navigating functions throught the carousel */

	const moveToPrevious = () => {
		setSelected((prev) => {
			if (prev === 1) {
				return newGalleryArray.length - 1;
			}

			return prev - 1;
		});
	};

	const moveToNext = () => {
		setSelected((prev) => {
			if (prev === newGalleryArray.length - 1) {
				return 1;
			} else {
				return prev + 1;
			}
		});
	};

	return (
		<GalleryWrapper>
			{newGalleryArray ? <GalleryImage src={newGalleryArray[selected]} /> : <h1>Loading</h1>}

			{newGalleryArray.length > 0 ? (
				<NavigationArrows length={newGalleryArray.length}>
					<button onClick={() => moveToPrevious()} className="carousel-btn">
						<i className="fas fa-chevron-left" />{' '}
					</button>
					<button onClick={() => moveToNext()} className="carousel-btn">
						<i className="fas fa-chevron-right" />
					</button>

					<GalleryCounter>
						{' '}
						{newGalleryArray.indexOf(newGalleryArray[selected])}/{newGalleryArray.length - 1}
					</GalleryCounter>
				</NavigationArrows>
			) : null}
		</GalleryWrapper>
	);
}

export default Gallery;
