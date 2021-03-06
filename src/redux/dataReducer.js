import { SET_PAGE_USERS, SET_PAGE_USERS_TO_SHOW, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, SET_FILTERED_USERS_TO_SHOW } from './types';

const initialState = {
	users: [],
	fetchedPagesNumbers: [],
	usersToShow: [],
	filteredUsersToShow: [],
	usersCountPerPage: 24,
	availablePagesCount: 5,
	subscriptions: [],
	nationalities: ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US']
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PAGE_USERS:
			return {...state, users: [...state.users, action.usersByPage], fetchedPagesNumbers: [...state.fetchedPagesNumbers, action.usersByPage.info.page]}
		case SET_PAGE_USERS_TO_SHOW:
			return {...state, usersToShow: action.usersToShow}
		case SET_FILTERED_USERS_TO_SHOW:
			return {...state, filteredUsersToShow: action.usersToShow}			
		case ADD_SUBSCRIPTION:
			return {
				...state, 
				usersToShow: state.usersToShow.map(user => {
					if(user.login.uuid === action.newSubscription.login.uuid) {
						user.subscribed = true;
					}
					return user;
				}),
				filteredUsersToShow: state.filteredUsersToShow.map(user => {
					if(user.login.uuid === action.newSubscription.login.uuid) {
						user.subscribed = true;
					}
					return user;
				}),				
				subscriptions: [...state.subscriptions, action.newSubscription]
			}
		case REMOVE_SUBSCRIPTION:
			return {
				...state, 
				usersToShow: state.usersToShow.map(user => {
					if(user.login.uuid === action.userId) {
						user.subscribed = false;
					}
					return user;
				}),
				filteredUsersToShow: state.filteredUsersToShow.map(user => {
					if(user.login.uuid === action.userId) {
						user.subscribed = false;
					}
					return user;
				}),				
				subscriptions: state.subscriptions.filter(user => user.login.uuid !== action.userId)}						
		default: return state
	}
}

export default dataReducer