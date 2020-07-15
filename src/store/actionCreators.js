import * as actionTypes from './actions'

export const removePlayer = (index) => {
    return {
        type: actionTypes.REMOVE_PLAYER,
        index,
    }
}