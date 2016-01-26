import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_DIRECTORIES = 'GET_DIRECTORIES'

// ------------------------------------
// Actions
// ------------------------------------
export const getDirectories = createAction(GET_DIRECTORIES, (value = []) => value)

export const fetchDirectories = () => {
    return function (dispatch) {
        return fetch('http://localhost:3001/directories').then(resp => resp.json()).then(
            data=>dispatch(getDirectories(data))
        )
    }
}

export const actions = {
    fetchDirectories
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    GET_DIRECTORIES: (state, action) => action.payload
}, [])
