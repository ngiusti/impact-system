import * as actionTypes from './actions'
import { updateObject } from './utility.js';


const intialState = {
    shots: 10,
    shotsRemaining: 5,
    gameType: "Cluster Shot",
    players: [],
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYERS:
            return {
                ...state,
                players: action.newPlayers
            }
        case actionTypes.REMOVE_PLAYER:
            const newPlayers = state.players.filter(function(player, index){
                return index !== action.index
            })
            return updateObject( state, { players: newPlayers } );

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
        case actionTypes.MISS_COUNTER:
            return {
                ...state,
                players: {
                }
            }
        case actionTypes.HIT_COUNTER:
            return {
                ...state,
                players: {

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