import { SHOW_PRELOADER, HIDE_PRELOADER } from './types';

const initialState = {
	loading: false
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_PRELOADER:
			return {...state, loading: true}
		case HIDE_PRELOADER:
			return {...state, loading: false}									
		default: return state
	}
}

export default appReducer