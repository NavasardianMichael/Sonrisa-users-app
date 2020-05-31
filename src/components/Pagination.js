import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { showUsersByPage, setPageUsersToShow } from '../redux/actions';
import { pageActiveItemHandler } from './utilities';

function Pagination(props) {
	const [pageControls, setPagesControls] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		for(let i = 1; i <= props.availablePagesCount; i++) {
			setPagesControls(prevState => [...prevState, i])
		}
	},[])

	function pageNumberClickHandler(event) {
		pageActiveItemHandler(event, '.page-link');
		const pageNumber = Number(event.target.dataset.pagenumber);
		if(props.fetchedPagesNumbers.includes(pageNumber)) {
			dispatch(setPageUsersToShow((props.users.find(item => item.info.page === pageNumber).results)))
		} else {
			dispatch(showUsersByPage(pageNumber, props.usersCountPerPage))
		}
	}

	const pageControlElems = pageControls.map((item, index) => {
		return (
			<li className="page-item" key={`pagination-item-${item}`}>
				<button className="page-link btn" onClick={pageNumberClickHandler} data-pagenumber={item}>
					{item}
				</button>
			</li>
		)
	})
	
	return (
		<div className="pagination my-2">
			<nav aria-label="Page navigation" className="mx-auto">
  				<ul className="pagination">
  					{pageControlElems}
  				</ul>
  			</nav>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		users: state.data.users,
		availablePagesCount: state.data.availablePagesCount,
		usersCountPerPage: state.data.usersCountPerPage,
		fetchedPagesNumbers: state.data.fetchedPagesNumbers
	}
}

export default connect(mapStateToProps, null)(Pagination)