import React, { useState, createContext, useEffect} from "react";
import Header from "./Header";
import { loadHeaderImages } from "../../redux/actions"
import { useSelector, useDispatch } from 'react-redux'

export const HeaderSliderContext = createContext();


export default function HeaderSlider() {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

  const dispatch = useDispatch();
  
  const items = useSelector((state) => state.headerImages.imagesList)
 useEffect(() => {
  dispatch(loadHeaderImages())
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

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]);

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <HeaderSliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        {/* <Arrows />
         */}
        <Header />
      </HeaderSliderContext.Provider>
    </div>
  );

}
