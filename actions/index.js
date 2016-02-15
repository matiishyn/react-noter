import { CALL_API, Schemas } from '../middleware/api'
// =====================================================================
// =====================================================================
// =====================================================================
export const NOTICES_REQUEST = 'NOTICES_REQUEST'
export const NOTICES_SUCCESS = 'NOTICES_SUCCESS'
export const NOTICES_FAILURE = 'NOTICES_FAILURE'

function fetchNotices() {
    return {
        [CALL_API]: {
            types: [NOTICES_REQUEST, NOTICES_SUCCESS, NOTICES_FAILURE],
            endpoint: `notices`
        }
    };
}

export function loadNotices() {
    return (dispatch, getState) => {
        return dispatch(fetchNotices())
    }
}
// =====================================================================
// =====================================================================
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
// =====================================================================
// =====================================================================
// =====================================================================
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUser(login) {
    return {
        [CALL_API]: {
            types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
            endpoint: `users/${login}`,
            schema: Schemas.USER
        }
    }
}

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadUser(login, requiredFields = []) {
    return (dispatch, getState) => {
        const user = getState().entities.users[login]
        if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
            return null
        }

        return dispatch(fetchUser(login))
    }
}
// =====================================================================
// =====================================================================
// =====================================================================
export const REPO_REQUEST = 'REPO_REQUEST'
export const REPO_SUCCESS = 'REPO_SUCCESS'
export const REPO_FAILURE = 'REPO_FAILURE'

// Fetches a single repository from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchRepo(fullName) {
    return {
        [CALL_API]: {
            types: [REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE],
            endpoint: `repos/${fullName}`,
            schema: Schemas.REPO
        }
    }
}

// Fetches a single repository from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadRepo(fullName, requiredFields = []) {
    return (dispatch, getState) => {
        const repo = getState().entities.repos[fullName]
        if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) {
            return null
        }

        return dispatch(fetchRepo(fullName))
    }
}
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}
