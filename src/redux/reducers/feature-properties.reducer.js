import { FEATURE_PROPERTIES_LOADED } from "../actionTypes";

const initialState = {
  featured: []
};

export default function featuresReducer(state = initialState, action) {
  switch (action.type) {
    case FEATURE_PROPERTIES_LOADED: {
      return {
        ...state,
        featured: [...action.payload]     
        }
    }
    default:
      return state;
  }
}
