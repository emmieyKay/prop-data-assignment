import React, { useContext } from "react";
import { FeatureSliderContext } from "./FeatureSlider";

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(FeatureSliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}
