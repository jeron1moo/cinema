import { SET_SEAT, SET_RESERVED } from '../constants/seats';

export const setSeat = (seat, id) => ({
  type: SET_SEAT,
  payload: { seat, id },
});

export const setReserved = (id) => ({
  type: SET_RESERVED,
  payload: { id },
});
