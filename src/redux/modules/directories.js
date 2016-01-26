import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_DIRECTORIES = 'GET_DIRECTORIES'
export const INC_DIR_COUNTER = 'INC_DIR_COUNTER'

// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction(INC_DIR_COUNTER, (value = 1) => {
    return value
})

export const getDirectories = createAction(GET_DIRECTORIES, (value = []) => {
    console.log('getDirectories');
    return value
})

export const fetchDirectories = () => {
    return function (dispatch) {
        return fetch('http://localhost:3001/directories').then(resp => resp.json()).then(
            data=>dispatch(getDirectories(data))
        )
    }
}

export const actions = {
    increment,
    fetchDirectories
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    GET_DIRECTORIES: (state, action) => {
        let newDirs = action.payload;
        console.log('GET_DIRECTORIES');
        console.log('action', action);
        return {counter: state.counter, directories: newDirs};

    },
    INC_DIR_COUNTER: (state, action) => {
        return {counter: state.counter + action.payload, directories: state.directories};
    }
}, {counter: 1, directories: [{name: 'dir1'}, {name: 'dir2'}]})
