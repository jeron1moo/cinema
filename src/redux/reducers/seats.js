import produce from 'immer';
import { SET_RESERVED, SET_SEAT } from '../constants/seats';

const initialState = {
  selected: {},
  reserved: {},
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SET_SEAT: {
      if (state.reserved[payload.id]) {
        const index = state.reserved[payload.id].findIndex(
          (reserv) => reserv === payload.seat,
        );
        if (index !== -1) {
          break;
        }
      }
      if (state.selected[payload.id]) {
        const index = state.selected[payload.id].findIndex(
          (select) => select === payload.seat,
        );
        if (index !== -1) {
          state.selected[payload.id].splice(index, 1);
          break;
        }
        state.selected[payload.id].push(payload.seat);
      } else state.selected[payload.id] = [payload.seat];
      break;
    }
    case SET_RESERVED: {
      if (state.reserved[payload.id])
        state.reserved[payload.id].push(...state.selected[payload.id]);
      else state.reserved[payload.id] = state.selected[payload.id];
      delete state.selected[payload.id];
      break;
    }
    default:
      break;
  }
}, initialState);
