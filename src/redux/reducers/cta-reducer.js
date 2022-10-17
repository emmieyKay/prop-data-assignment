import { CTA_LOADED } from "../actionTypes";

const initialState = {
  items: []
};

export default function ctaReducer(state = initialState, action) {
  switch (action.type) {
    case CTA_LOADED: {
      return {
        ...state,
        items: [...action.payload]     
        }
    }
    default:
      return state;
  }
}
