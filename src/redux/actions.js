import { LOAD_FEATURE_PROPERTIES, FEATURE_PROPERTIES_LOADED, HEADER_IMAGES_LOADED, LOAD_HEADER_IMAGES, CTA_LOADED, LOAD_CTA } from "./actionTypes";


export const loadFeaturePropeties = () => ({
    type: LOAD_FEATURE_PROPERTIES   
  });
export const featurePropetiesLoaded = content => ({
    type: FEATURE_PROPERTIES_LOADED,
    payload: content
  });


export const loadHeaderImages = () => ({
    type: LOAD_HEADER_IMAGES   
  });
export const headerImagesLoaded = payload => {
    return ({
        type: HEADER_IMAGES_LOADED,
        payload
      })
};

export const loadCTA = () => ({
    type: LOAD_CTA   
  });
export const CTALoaded = payload => {
    return ({
        type: CTA_LOADED,
        payload
      })
};