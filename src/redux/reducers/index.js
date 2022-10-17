import { combineReducers } from "redux";
import headerImagesReducer from "./header-images.reducer";
import featuresReducer from "./feature-properties.reducer";
import ctaReducer from "./cta-reducer";

export default combineReducers({ features: featuresReducer, headerImages: headerImagesReducer, ctaReducer });
