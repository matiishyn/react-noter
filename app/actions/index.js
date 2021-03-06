import { CALL_API, Schemas } from '../middleware/api'

// =====================================================================
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}

export * from './notices'
export * from './directories'
