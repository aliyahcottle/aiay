export const FETCHING_CONTENT = 'FETCHING_CONTENT'
export const FETCHING_CONTENT_SUCCESS = 'FETCHING_CONTENT_SUCCESS'
export const FETCHING_CONTENT_ERROR = 'FETCHING_CONTENT_ERROR'
export const SET_CONTENT_FILTER = 'SET_CONTENT_FILTER'

export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR'

export const GET_CONTENT = 'GET_CONTENT'
export const GET_PROGRESS_CHART = 'GET_PROGRESS_CHART'
export const GET_SHOP_PRODUCTS = 'GET_SHOP_PRODUCTS'

export const FIND_ITEM_BY_DATE = 'FIND_ITEM_BY_DATE'
export const FIND_ITEM_BY_TAG = 'FIND_ITEM_BY_TAG'


export const ContentFilters = {
	SHOW_ALL: 'SHOW_ALL',
	ARTICLES: 'ARTICLES',
	CLOGS: 'CLOGS'
}

export const ProgressFilters = {
	SHOW_ALL: 'SHOW_ALL',
	LOVE: 'LOVE',
	FINANCES: 'FINANCES',
	HEALTH: 'HEALTH',
	PERSONAL: 'PERSONAL',
	FAMILY: 'FAMILY',
	CAREER: 'CAREER',
	FUN: 'FUN'
}



export function getContent(){return {type: 'FETCHING_CONTENT'}}

export function contentErorr(){return {type: 'FETCHING_CONTENT_ERROR'}}

export function contentSucess(data){return {type: 'FETCHING_CONTENT_SUCCESS', data}}

export function setContentFilter(filter){return {type: 'SET_CONTENT_FILTER', filter}}

export function toggleCalendar(){ return {type: 'TOGGLE_CALENDAR'}}

