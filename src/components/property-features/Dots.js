import React, { useContext } from "react";
import { FeatureSliderContext } from "./FeatureSlider";
import Dot from "./Dot";

export default function Dots() {
  const { slidesCount } = useContext(FeatureSliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}
