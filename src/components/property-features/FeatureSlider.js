import React, { useState, createContext , useEffect} from "react";
import PropertiesList from "./PropertiesList";

import Arrows from "./Arrows";
import Dots from "./Dots";

import { useSelector, useDispatch } from 'react-redux'

import { loadFeaturePropeties } from "../../redux/actions"


export const FeatureSliderContext = createContext();

export default function FeatureSlider({ ...props}){
    const { width, height }= props;
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)
  
    const dispatch = useDispatch();
  
    const items = useSelector((state) => state.features.featured)
    useEffect(() => {
      dispatch(loadFeaturePropeties())
      }, [items.length, dispatch])
    const changeSlide = (direction = 1) => {
      let slideNumber = 0;
  
      if (slide + direction < 0) {
        slideNumber = items.length - 1;
      } else {
        slideNumber = (slide + direction) % items.length;
      }
  
      setSlide(slideNumber);
    };
  
    const goToSlide = (number) => {
      setSlide(number % items.length);
    };
  
    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;
  
      setTouchPosition(touchDown);
    }
  
    const handleTouchMove = (e) => {
      if (touchPosition === null) {
        return;
      }
  
      const currentPosition = e.touches[0].clientX;
      const direction = touchPosition - currentPosition;
  
      if (direction > 10) {
        changeSlide(1);
      }
  
      if (direction < -10) {
        changeSlide(-1);
      }
  
      setTouchPosition(null);
    }
  
    return (
      <div
        style={{ width, height }}
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <FeatureSliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <Arrows />
          <PropertiesList />
          <Dots />
        </FeatureSliderContext.Provider>
      </div>
    );

}