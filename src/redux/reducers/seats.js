import produce from 'immer';
import { SET_RESERVED, SET_SEAT, SET_TITLE } from '../constants/seats';

const initialState = {
  selected: {},
  reserved: {},
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SET_SEAT: {
      if (state.reserved[payload.id]?.seats) {
        const index = state.reserved[payload.id]?.seats.findIndex(
          (reserv) => reserv === payload.seat,
        );
        if (index !== -1) {
          break;
        }
      }
      if (state.selected[payload.id]?.seats) {
        const index = state.selected[payload.id]?.seats.findIndex(
          (select) => select === payload.seat,
        );
        if (index !== -1) {
          state.selected[payload.id]?.seats.splice(index, 1);
          break;
        }
        state.selected[payload.id]?.seats.push(payload.seat);
      } else {
        state.selected[payload.id] = {
          seats: [payload.seat],
        };
      }
      break;
    }
    case SET_RESERVED: {
      if (state.reserved[payload.id])
        state.reserved[payload.id]?.seats.push(
          ...state.selected[payload.id]?.seats,
        );
      else state.reserved[payload.id] = state.selected[payload.id];
      delete state.selected[payload.id];
      break;
    }
    case SET_TITLE: {
      if (state.selected[payload.id]) {
        state.selected[payload.id].name = payload.title;
      }
      break;
    }
    default:
      break;
  }
}, initialState);
