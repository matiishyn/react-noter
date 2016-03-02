import { CALL_API } from '../middleware/api'

// =====================================================================
export const SET_ACTIVE_DIRECTORY = 'SET_ACTIVE_DIRECTORY'

export function setActiveDirectory(activeDirectoryId) {
    return {
        type: SET_ACTIVE_DIRECTORY,
        activeDirectoryId
    };
}
// =====================================================================
export const DIRECTORIES_REQUEST = 'DIRECTORIES_REQUEST'
export const DIRECTORIES_SUCCESS = 'DIRECTORIES_SUCCESS'
export const DIRECTORIES_FAILURE = 'DIRECTORIES_FAILURE'

function fetchDirectories() {
    return {
        [CALL_API]: {
            types: [DIRECTORIES_REQUEST, DIRECTORIES_SUCCESS, DIRECTORIES_FAILURE],
            endpoint: `directories`
        }
    };
}

export function loadDirectories() {
    return (dispatch, getState) => {
        return dispatch(fetchDirectories())
    }
}
