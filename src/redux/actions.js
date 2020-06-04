import { SET_PAGE_USERS, SET_PAGE_USERS_TO_SHOW, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, SHOW_PRELOADER, HIDE_PRELOADER, TOGGLE_THEME, SET_FILTERED_USERS_TO_SHOW } from './types';

export function setPageUsers(usersByPage) {
	return {
		type: SET_PAGE_USERS,
		usersByPage
	}
};

export function setPageUsersToShow(usersToShow) {
	return {
		type: SET_PAGE_USERS_TO_SHOW,
		usersToShow
	}
};

export function showPreloader() {
	return {
		type: SHOW_PRELOADER
	}
};

export function hidePreloader() {
	return {
		type: HIDE_PRELOADER
	}
};

export function toggleTheme() {
	return {
		type: TOGGLE_THEME
	}
};

export function setFilteredUsersToShow(usersToShow) {
	return {
		type: SET_FILTERED_USERS_TO_SHOW,
		usersToShow
	}
};

export function showUsersByPage(page, usersPerPage) {
	return function(dispatch) {
		dispatch(showPreloader());
		fetch(`https://randomuser.me/api/?page=${page}&results=${usersPerPage}&seed=page-${page}`)
		.then(response => response.json())
		.then(data => {
			data.results.forEach(item => item.subscribed = false);
			dispatch(setPageUsers(data));
			dispatch(setPageUsersToShow(data.results));
			dispatch(hidePreloader());
		})
	}
};

export function fetchUsersByCriteria(criteria) {
	return function(dispatch) {
		const natsString = Object.keys(criteria.checkedNationalities).toString()
		dispatch(showPreloader());
		fetch(`https://randomuser.me/api/?gender=${criteria.gender}&nat=${natsString}&results=${criteria.filteredUsersCount}`)
		.then(response => response.json())
		.then(data => {
			data.results.forEach(item => item.subscribed = false);
			dispatch(setFilteredUsersToShow(data.results));
			console.log(data.results)
			dispatch(hidePreloader());
		})
	}
} 

export function addSubscription(user) {
	return {
		type: ADD_SUBSCRIPTION,
		newSubscription: user
	}
};

export function removeSubscription(userId) {
	return {
		type: REMOVE_SUBSCRIPTION,
		userId
	}
};