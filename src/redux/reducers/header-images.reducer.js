import { HEADER_IMAGES_LOADED } from "../actionTypes";

const initialState = {
  imagesList: []
};

export default function headerImagesReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_IMAGES_LOADED: {
    
      return {
        ...state,
        imagesList: [...action.payload]     
        }
    }
    default:
      return state;
  }
}
