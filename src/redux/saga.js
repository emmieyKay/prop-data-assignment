import { LOAD_FEATURE_PROPERTIES, LOAD_HEADER_IMAGES, LOAD_CTA } from "./actionTypes";
import { put, takeEvery } from 'redux-saga/effects'
import {headerImages} from "../constants/header-images";
import {features} from "../constants/property-feature";
import {cardsItems} from "../constants/cards";
import {headerImagesLoaded, featurePropetiesLoaded, CTALoaded} from "./actions";


function* fetchHeaderImages() {
    yield put(headerImagesLoaded(headerImages))
   
}
function* fetchFeaturedProperties() {
    
    yield put(featurePropetiesLoaded(features))
}
function* fetchCTA() {
    
    yield put(CTALoaded(cardsItems))
}


// use them in parallel
export default function* rootSaga() {
    yield takeEvery(LOAD_FEATURE_PROPERTIES, fetchFeaturedProperties)
    yield takeEvery(LOAD_CTA, fetchCTA)
    yield takeEvery(LOAD_HEADER_IMAGES, fetchHeaderImages)
}