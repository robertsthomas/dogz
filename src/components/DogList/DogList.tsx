import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { addDogToFavorites, unFavoriteDogAction } from '../../redux/actions';
import {
	StyledContainer,
	DogImage,
	HeartImage,
	SearchText
} from '../globalStyles';
import { icons } from '../../assets';

const DogList: React.FC<{}> = () => {
	const breedImages: string[] = useSelector(
		(state: RootStateOrAny) => state.breedImages
	);
	const favorites: string[] = useSelector(
		(state: RootStateOrAny) => state.favorites
	);
	const isLoading: boolean = useSelector(
		(state: RootStateOrAny) => state.isLoading
	);
	const dispatch = useDispatch();

	const addToFavorites = (dog: string) => {
		dispatch(addDogToFavorites(dog));
	};

	const unFavoriteDog = (dog: string) => {
		dispatch(unFavoriteDogAction(dog));
	};

	return (
		<StyledContainer>
			{isLoading && <Spinner animation='border' variant='danger' />}
			{breedImages.length == 0 && (
				<SearchText>
					Try searching for dogs! <br /> Ex: Boxer, Pug, Hound
				</SearchText>
			)}
			<Row className='justify-content-start align-items-center'>
				{breedImages.map((dog, idx) => (
					<Col
						xs={6}
						sm={6}
						md={4}
						lg={3}
						key={idx}
						style={{ padding: '5px 10px' }}
					>
						<DogImage src={dog} rounded fluid />

						{favorites.includes(dog) ? (
							<HeartImage
								src={icons.redHeartIcon}
								onClick={() => unFavoriteDog(dog)}
							/>
						) : (
							<HeartImage
								src={icons.whiteHeartIcon}
								onClick={() => addToFavorites(dog)}
							/>
						)}
					</Col>
				))}
			</Row>
		</StyledContainer>
	);
};

export default DogList;
