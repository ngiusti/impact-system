import * as actionTypes from './actions'

const intialState = {
    shots: 10,
    shotsRemaining: 10,
    gameType: "Cluster Shot",
    players: [
        {
            name: "",
            score: 0,
            active: true,
            time: 0,
        }
    ],
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.newPlayer]
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
            } else {
                if(state.shotsRemaining === 0){
                    alert('done');
                }
            }
        default: 
            return state;
    }
}

export default reducer;