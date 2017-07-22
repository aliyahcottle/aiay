import { combineReducers } from 'redux';

import { ContentFilters } from '../actions';

import { FETCHING_CONTENT,
         FETCHING_CONTENT_SUCCESS,
         FETCHING_CONTENT_ERROR,
         SET_CONTENT_FILTER,
         TOGGLE_CALENDAR
} from '../actions';


const initialState = {
	items: [],
	contentFilter: ContentFilters.SHOW_ALL,
	isFetching: false,
	isLoading: false,
	error: false,
	showCalendar: false,
}


function content(state = initialState, action) {

	switch(action.type){
		case FETCHING_CONTENT:
			return {
				...state,
				items: [],
				isFetching: true
			}

		case FETCHING_CONTENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				isLoading: true,
				items: action.data
			}

		case FETCHING_CONTENT_ERROR:
			return {
				...state,
				isFetching: false,
				error: true,
			}
		default:
			return state
	}
}

function contentFilter(state = ContentFilters.SHOW_ALL, action){


	switch(action.type){
		
		case SET_CONTENT_FILTER:
			return { contentFilter: action.filter }
		default:
			return state
	}

}

function toggleCalendar(state = initialState, action) {

	switch(action.type){

		case TOGGLE_CALENDAR:
			return {
			...state,
			showCalendar: !state.showCalendar
		}
		default:
			return state
	}
}

const contentState = combineReducers({
	contentFilter,
	content,
	toggleCalendar
});

export default contentState;
