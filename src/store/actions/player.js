import { GET_PLAYER } from './types';

export function getPlayer(firstname, surname) {
    return {
        type: GET_PLAYER,
        payload: { firstname, surname }
    }
}