import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { showUsersByPage, setPageUsersToShow } from '../redux/actions';
import Pagination from './Pagination';
import UserItem from './UserItem';
import Preloader from './Preloader';

function Users(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		if(props.fetchedPagesNumbers.includes(1)) {
			dispatch(setPageUsersToShow((props.users.find(item => item.info.page === 1).results)))
		} else {
			dispatch(showUsersByPage(1, props.usersCountPerPage))
		}
	},[]);

	const shownUsers = props.usersToShow.map(item => {
		return (
			<div className="my-2 col-6 col-md-4 col-lg-3 col-xl-2" key={item.login.uuid}>
				<UserItem user={item} />
			</div>
		)
	})

	return (
		<div className='users'>
			<Pagination />
			<div className="row">
				{props.loading ? <Preloader /> : shownUsers}
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		users: state.data.users,
		usersToShow: state.data.usersToShow,
		usersCountPerPage: state.data.usersCountPerPage,
		fetchedPagesNumbers: state.data.fetchedPagesNumbers,
		loading: state.app.loading
	}
}

export default connect(mapStateToProps, null)(Users)