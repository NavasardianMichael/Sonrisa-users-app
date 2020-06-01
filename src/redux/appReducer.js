import { SHOW_PRELOADER, HIDE_PRELOADER, TOGGLE_THEME } from './types';

const initialState = {
	loading: false,
	darkTheme: false
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_PRELOADER:
			return {...state, loading: true}
		case HIDE_PRELOADER:
			return {...state, loading: false}
		case TOGGLE_THEME:
			return {...state, darkTheme: !state.darkTheme}												
		default: return state
	}
}

export default appReducer