import * as actionTypes from './actions'

const intialState = {
    shots: 10,
    shotsRemaining: 5,
    gameType: "Cluster Shot",
    players: [],
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.newPlayer]
            }
        case actionTypes.REMOVE_PLAYER:
            let newPlayers = state.players.slice();
            newPlayers.splice(action.index, 1);
            return {
                ...state,
                players: [newPlayers]
            }
        case actionTypes.SELECT_GAME:
            return {
                ...state,
                gameType: action.gameType
            }
        case actionTypes.NEW_GAME: 
            return {
                ...state,

                shots: intialState.shots,
                shotsRemaining: intialState.shotsRemaining,
            }
        case actionTypes.SHOTS: 
            return {
                ...state,
                shots: action.shots,
                shotsRemaining: action.shotsRemaining
            }
        case actionTypes.SHOT_FIRED:
            if(state.shotsRemaining > 0) {
                return {
                    ...state,
                    shotsRemaining: state.shotsRemaining - 1
                }
            } 
        case actionTypes.SET_TIME:
            return{

            }
        default: 
            return state;
    }
}

export default reducer;