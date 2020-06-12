import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Spinner, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Header from './Header';
import Search from './Search';
import DogList from './DogList/DogList';
import FavoritesList from './FavoritesList/FavoritesList';
import { getAllBreeds } from '../redux/actions';

import './sample.css';

const App: FC = () => {
	const dispatch = useDispatch();
	const breeds = useSelector((state: RootStateOrAny) => state.breeds);
	const isLoading = useSelector((state: RootStateOrAny) => state.isLoading);

	useEffect(() => {
		dispatch(getAllBreeds());
	}, []);

	return (
		<Container>
			<Header />
			<Search breeds={breeds} />
			{isLoading ? (
				<StyledRow>
					<Spinner animation='border' role='status'>
						<span className='sr-only'>Loading...</span>
					</Spinner>
				</StyledRow>
			) : (
				<DogList />
			)}
			<FavoritesList />
		</Container>
	);
};

const Container = styled.div({
	margin: '0 auto',
	height: '100%',
	width: '560px',
	paddingTop: '10px'
});

const StyledRow = styled(Row)({
	justifyContent: 'center',
	alignItems: 'center',
	height: '60%'
});

export default App;
