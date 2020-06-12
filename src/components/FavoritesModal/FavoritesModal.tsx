import React from 'react'
import { Modal, Container } from 'react-bootstrap'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { CLOSE_MODAL } from '../../redux/types';

import { StyledRow, HeartImage, DogImage, StyledCol } from '../globalStyles'

import {icons} from '../../assets';

interface ModalProps {
  showModal: boolean
  unFavoriteDog: (string) => void
}


const FavoritesModal: React.FC<ModalProps> = ({ showModal, unFavoriteDog }) => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites)
  const dispatch = useDispatch()

  return (
    <Modal show={showModal} onHide={() => dispatch({type: CLOSE_MODAL})}>
      <Modal.Header closeButton>
        <Modal.Title>Favorite Dogs</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container style={{ height: '100%' }}>
          <StyledRow>
            {(favorites.length === 0) && <div style={{textAlign: 'center', width: '100%'}}>You dont have any favorite dogs. <br /> Try searching for a one! <br /> 🐶</div>}
            {favorites.map((dog, idx) => (
              <StyledCol xs={6} sm={6} md={4} lg={4} key={idx}>
                <DogImage src={dog} rounded fluid />
                <HeartImage src={icons.redHeartIcon} onClick={() => unFavoriteDog(dog)} />
              </StyledCol>
            ))}
          </StyledRow>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default FavoritesModal
