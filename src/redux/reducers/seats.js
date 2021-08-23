import produce from 'immer';
import { SET_RESERVED, SET_SEAT, SET_TITLE } from '../constants/seats';

const initialState = {
  selected: {},
  reserved: {},
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SET_SEAT: {
      // check if there is MOVIE ID item in reserved list
      if (state.reserved[payload.id]?.seats) {
        // check if the current SEAT in RESERVED list
        const index = state.reserved[payload.id]?.seats.findIndex(
          (reserv) => reserv === payload.seat,
        );
        if (index !== -1) {
          break;
        }
      }
      // check if there is MOVIE ID item in selected list
      if (state.selected[payload.id]?.seats) {
        // check if the current SEAT in SELECTED list
        const index = state.selected[payload.id]?.seats.findIndex(
          (select) => select === payload.seat,
        );
        if (index !== -1) {
          // if SEAT is in SELECTED list then remove it from this list
          state.selected[payload.id]?.seats.splice(index, 1);
          break;
        }
        // otherwise push this SEAT to SELECTED list
        state.selected[payload.id]?.seats.push(payload.seat);
      } else {
        // if the SELECTED list doesnt contain MOVIE ID then add to list new one
        state.selected[payload.id] = {
          seats: [payload.seat],
        };
      }
      break;
    }
    case SET_RESERVED: {
      // if there is a MOVIE ID in reserved list
      if (state.reserved[payload.id]) {
        // push all item values from SELECTED list to RESERVED list
        state.reserved[payload.id]?.seats.push(
          ...state.selected[payload.id]?.seats,
        );
      } else {
        // create new RESERVED list item and push all values from SELECTED
        state.reserved[payload.id] = state.selected[payload.id];
      }
      // remove SELECTED item
      delete state.selected[payload.id];
      break;
    }
    case SET_TITLE: {
      // if there is  MOVIE ID in SELECTED list then add to SELECTED list item new prop: TITLE
      if (state.selected[payload.id]) {
        state.selected[payload.id].name = payload.title;
      }
      break;
    }
    default:
      break;
  }
}, initialState);
