import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
// todo remove
function entities(state = {users: {}, repos: {}}, action) {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }

    return state
}


function directories(state = [], action) {
    if (action.response && action.type === ActionTypes.DIRECTORIES_SUCCESS) {
        return action.response;
    }

    return state
}

function notices(state = [], action) {
    if (action.response && action.type === ActionTypes.NOTICES_SUCCESS) {
        return action.response;
    }

    return state
}


// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return action.error
    }

    return state
}

const rootReducer = combineReducers({
    directories,
    notices,
    errorMessage,
    routing: routeReducer
})


export default rootReducer
