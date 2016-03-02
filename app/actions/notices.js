import { CALL_API } from '../middleware/api'
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
