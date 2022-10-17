import PropertyFeatureCard from "./PropertyFeatureCard"
import React, { useContext, useState, useEffect , useRef} from "react";
import { FeatureSliderContext } from "./FeatureSlider";
const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function PropertiesList() {
  const { slideNumber, items } = useContext(FeatureSliderContext);
  const [data, setData] = useState({});
  const prevData = usePreviousValue(data);

  useEffect(() => {
    if (items.length > 0) {
      setData(items[slideNumber])
    }

  }, [slideNumber, items]);
  return (
    <div
      className="slide-list px-12" >
         {data  &&
        <div className="slide" style={{ animation: prevData!==data?'fadeIn 5s':'' }}>
          <PropertyFeatureCard feature={data} />
        </div>
      }

    </div>
  );
}