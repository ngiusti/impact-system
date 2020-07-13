export const ADD_PLAYER = "ADD_PLAYER";
export const SELECT_GAME = "SELECT_GAME";
export const NEW_GAME = "NEW_GAME";
export const SHOTS = "SHOTS";
export const SHOT_FIRED = "SHOT_FIRED";

export const shotFired = (shotsRemaining) => {
    return {
        type: SHOT_FIRED,
        val: shotsRemaining,
    };
}