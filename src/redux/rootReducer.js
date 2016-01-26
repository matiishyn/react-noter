import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import directories from './modules/directories'

export default combineReducers({
    counter,
    router,
    directories
})
