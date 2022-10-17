export const getPropertyFeaturesState = store => store.features;
export const getHeaderImagesState = store => store.headerImages;


export const getPropertyFeatured = store =>
getPropertyFeaturesState(store) ? getPropertyFeaturesState(store).featured : [];
export const getHeaderImages = store =>
getHeaderImagesState(store) ? getHeaderImagesState(store).featured : [];
