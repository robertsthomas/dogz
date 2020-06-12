import React, { useState } from 'react'
import { Container, Col, Image } from 'react-bootstrap'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import FavoritesModal from '../FavoritesModal/FavoritesModal'

import { unFavoriteDogAction } from '../../redux/actions'

import { DogImage, MoreFavorites, HeartImage, StyledCol, StyledRow, FavoritesHeader } from '../globalStyles';

import {icons} from '../../assets';
import { SHOW_MODAL } from '../../redux/types'

interface BaseProps {}

const FavoritesList: React.FC<BaseProps> = () => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites)
  const showModal = useSelector((state: RootStateOrAny) => state.showModal)
  const dispatch = useDispatch()

  const unFavoriteDog = (dog: string) => {
    dispatch(unFavoriteDogAction(dog))
  }

  return (
    <Container>
      <hr />
      <FavoritesHeader>
        <Col lg={1}>
          <Image src={icons.redHeartIcon} />
        </Col>
        <Col lg={1}>Favorites</Col>
      </FavoritesHeader>

      <StyledRow>
        {favorites.slice(0, 3).map((dog, idx) => (
          <StyledCol xs={6} sm={6} md={4} lg={3} key={idx}>
            <DogImage src={dog} rounded fluid />
            <HeartImage src={icons.redHeartIcon} onClick={() => unFavoriteDog(dog)} />
          </StyledCol>
        ))}

        {favorites.length > 3 && (
          <MoreFavorites onClick={() => dispatch({type: SHOW_MODAL})}>View All Favorites</MoreFavorites>
        )}
      </StyledRow>
      <FavoritesModal
        showModal={showModal}
        unFavoriteDog={unFavoriteDog}
      />
    </Container>
  )
}


export default FavoritesList
