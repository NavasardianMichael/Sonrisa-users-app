import { combineReducers } from 'redux'
import dataReducer from './dataReducer';
import appReducer from './appReducer';

export const rootReducer = combineReducers({
	app: appReducer,
	data: dataReducer
})