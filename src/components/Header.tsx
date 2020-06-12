import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Heart from './Heart';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { SHOW_MODAL } from '../redux/types';

const Header: FC = () => {
	const [show, setShow] = useState('none');
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			setShow('block');
		}, 5000);
	});

	const tooltip = (
		<Tooltip
			id='favorites-tooltip'
			style={{ display: show, marginBottom: 10, marginLeft: 5 }}
		>
			Favorite dogs here!
		</Tooltip>
	);

	return (
		<Container>
			<Title>Dog Breeds</Title>
			<OverlayTrigger
				defaultShow={true}
				delay={{ show: 250, hide: 400 }}
				placement='right'
				overlay={tooltip}
			>
				<HeartWrapper onClick={() => dispatch({ type: SHOW_MODAL })}>
					<Heart icon='redHeartIcon' alt='red heart icon' />
				</HeartWrapper>
			</OverlayTrigger>
		</Container>
	);
};

const Container = styled.div({
	display: 'flex',
	justifyContent: 'space-between'
});

const Title = styled.h1({
	fontWeight: 'bold',
	fontSize: '24px',
	lineHeight: '33px'
});

const HeartWrapper = styled.span({
	'&:hover': {
		cursor: 'pointer'
	}
});

export default Header;
