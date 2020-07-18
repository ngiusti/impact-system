export const ADD_PLAYERS = "ADD_PLAYERS";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const SELECT_GAME = "SELECT_GAME";
export const NEW_GAME = "NEW_GAME";
export const SHOTS = "SHOTS";
export const SHOT_FIRED = "SHOT_FIRED";
export const SET_TIME = 'SET_TIME';
export const HIT_COUNTER = "HIT_COUNTER";
export const MISS_COUNTER = "MISS_COUNTER";

export const shotFired = (shotsRemaining) => {
    return {
        type: SHOT_FIRED,
        val: shotsRemaining,
    };
}

export const missCounter = (miss) => {
    return {
        type: MISS_COUNTER,
        val: miss,
    };
}

export const hitCounter = (hit) => {
    return {
        type: MISS_COUNTER,
        val: hit,
    };
}


