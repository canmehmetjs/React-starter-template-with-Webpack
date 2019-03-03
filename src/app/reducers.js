/*
 Contains all the reducers mapping for each view component 
 that will be mapped to global state store. For every new view added, 
 entry will be done in this file for mapping to its state object.
*/

import { combineReducers } from "redux"
import homeReducer from '../views/home/reducer'
import ordersReducer from '../views/orders/reducer'

/**
 * Defines mapping of individual view reducers to global state object.
 *
 * Every time a new view is created, entry for that view's reducer is required here.
 *
 * @type {Reducer<any>}
 */
export const reducers = combineReducers({
  home: homeReducer,
  orders: ordersReducer
});