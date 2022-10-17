import React, { useContext } from "react";
import { FeatureSliderContext } from "./FeatureSlider";
export default function Arrows() {
  const { changeSlide } = useContext(FeatureSliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
}
