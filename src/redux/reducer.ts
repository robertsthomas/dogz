import {
	CLEAR_BREEDS,
	ADD_TO_FAVORITES,
	UNFAVORITE_DOG,
	GET_ALL_BREEDS_REQUEST,
	GET_ALL_BREEDS_SUCCESS,
	GET_ALL_BREEDS_FAILURE,
	SHOW_MODAL,
	CLOSE_MODAL,
	SEARCH_BREED_REQUEST,
	SEARCH_BREED_SUCCESS,
	SEARCH_BREED_FAILURE
} from './types';

const initialState: any = {
	breeds: [],
	breedImages: [],
	favorites: [],
	isLoading: false
};

export const reducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		// Fetching all breeds
		case GET_ALL_BREEDS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case GET_ALL_BREEDS_SUCCESS:
			return {
				...state,
				isLoading: false,
				breeds: payload
			};

		case GET_ALL_BREEDS_FAILURE:
			return {
				...state,
				isLoading: false,
				breeds: [],
				error: payload
			};
		// Search Breed
		case SEARCH_BREED_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case SEARCH_BREED_SUCCESS:
			return {
				...state,
				isLoading: false,
				breedImages: [...payload]
			};

		case SEARCH_BREED_FAILURE:
			return {
				...state,
				isLoading: false,
				breedImages: [],
				error: payload
			};

		// Favorite Dog
		case ADD_TO_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, payload]
			};

		case UNFAVORITE_DOG:
			return {
				...state,
				favorites: state.favorites.filter((img) => img !== payload)
			};

		case SHOW_MODAL:
			return {
				...state,
				showModal: true
			};

		case CLOSE_MODAL:
			return {
				...state,
				showModal: false
			};

		case CLEAR_BREEDS:
			return {
				...state,
				breedImages: []
			};

		default:
			return state;
	}
};
