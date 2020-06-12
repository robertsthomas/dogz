import {
  CLEAR_BREEDS,
  ADD_TO_FAVORITES,
  UNFAVORITE_DOG,
  GET_ALL_BREEDS_REQUEST,
  GET_ALL_BREEDS_SUCCESS,
  GET_ALL_BREEDS_FAILURE,
  SEARCH_BREED_REQUEST,
  SEARCH_BREED_SUCCESS,
  SEARCH_BREED_FAILURE,
} from './types'

import axios from 'axios'

export const searchByBreed = (breed) => async (dispatch) => {
  const url = `https://dog.ceo/api/breed/${breed}/images`
  const {
    data: { message },
  } = await axios.get(url)

  dispatch({ type: SEARCH_BREED_REQUEST })

  return await axios
    .get(url)
    .then(({ data }) => {
      const imgs = data.message
      const first10Dogs = imgs.slice(0, 10)

      dispatch({ type: SEARCH_BREED_SUCCESS, payload: first10Dogs })
    })
    .catch((error) => {
      dispatch({ type: SEARCH_BREED_FAILURE, payload: error })
      dispatch({ type: CLEAR_BREEDS })
    })
}

export const getAllBreeds = () => async (dispatch) => {
  const url = 'https://dog.ceo/api/breeds/list/all'

  dispatch({ type: GET_ALL_BREEDS_REQUEST })

  return await axios
    .get(url)
    .then(({ data }) => {
      setTimeout(() => {
        dispatch({ type: GET_ALL_BREEDS_SUCCESS, payload: Object.keys(data.message) })
      }, 1500)
    })
    .catch((error) => {
      dispatch({ type: GET_ALL_BREEDS_FAILURE, payload: error })
      console.log(error)
    })
}

export const addDogToFavorites = (dog: string) => async (dispatch) => {
  // Optionally you can do some async programming and dispatch other actions
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: dog,
  })
}

export const unFavoriteDogAction = (dog: string) => async (dispatch) => {
  dispatch({
    type: UNFAVORITE_DOG,
    payload: dog,
  })
}
