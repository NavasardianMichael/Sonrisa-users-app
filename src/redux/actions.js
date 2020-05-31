import { SET_PAGE_USERS, SET_PAGE_USERS_TO_SHOW, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, SHOW_PRELOADER, HIDE_PRELOADER } from './types';

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