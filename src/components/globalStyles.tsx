import styled from 'styled-components';
import { Image, Container, Row, Col } from 'react-bootstrap';

export const StyledContainer = styled(Container)({
	minHeight: '60%'
});

export const StyledRow = styled(Row)({
	justifyContent: 'flex-start',
	alignItems: 'center'
});

export const StyledCol = styled(Col)({
	padding: '5px 10px'
});

export const DogImage = styled(Image)({
	height: 160,
	width: 160,
	objectFit: 'cover',
	position: 'relative'
});

export const HeartImage = styled(Image)({
	position: 'absolute',
	bottom: 15,
	right: 15,
	'&:hover': {
		transform: 'scale(1.2)',
		cursor: 'pointer'
	}
});

export const SearchText = styled.div({
	display: 'flex',
	height: '50vh',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	fontSize: 14,
	color: 'grey'
});

export const MoreFavorites = styled.div({
	width: '130px',
	height: '160px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#62929E',
	borderRadius: '7px',
	color: 'white',
	fontSize: 'small',
	'&:hover': {
		cursor: 'pointer'
	}
});

export const FavoritesHeader = styled(Row)`
	margin-bottom: 5px;
	justify-content: start;
	align-items: center;
`;
