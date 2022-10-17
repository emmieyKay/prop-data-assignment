import React, { useContext, useState, useEffect, useRef } from "react";
import { HeaderSliderContext } from "./HeaderSlider";
const usePreviousValue = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};


export default function Header() {

    const { slideNumber, items } = useContext(HeaderSliderContext);
    const [ImageData, setImage] = useState(null);
    const prevImage = usePreviousValue(ImageData);
    useEffect(() => {
        if (items.length > 0) {
            setImage(items[slideNumber])
        }

    }, [slideNumber, items]);
    return (
        <div className="relative w-full">
            <div
                className="slide-list w-full" >
                {ImageData  &&
                    <div className="slide" style={{ animation: prevImage !== ImageData ? 'fadeIn 6s' : '' }}>
                        <img src={ImageData.value} alt="ImageData" className=" h-96 w-full" loading="lazy" />
                    </div>
                }

            </div>
            <div className="absolute bottom-3 sm:bottom-1/4 w-full">
                <div className="bg-slate-800 bg-opacity-50 flex items-center mx-auto  max-w-3xl flex-col py-4">

                    <div className="w-full grid grid-cols-5 px-4 gap-4">
                        <div className="col-span-5 sm:col-span-1 w-full">
                            <select name="cars" className="w-full text-xs text-slate-400 focus:outline-none">
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>
                        <div className="col-span-5 sm:col-span-2 w-full">
                            <select name="cars" className="w-full text-xs text-slate-400 focus:outline-none">
                                <option value="residental">Residental</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>
                        <div className="col-span-5 sm:col-span-2 w-full">
                            <input className="w-full text-xs px-2 py-px" placeholder="Type Area or Surburb Name" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between w-full px-4  mt-4 ">
                        <div className="self-start">
                            <button type="button" className="py-0.5 px-2 mb-2 text-xs font-medium text-gray-300 focus:outline-none bg-transparent rounded-sm border border-gray-200 hover:opacity-90 before:content-['#'] before:text-red-700 before:mr-3">Web Ref. Number Search</button>
                        </div>

                        <div className="self-start flex flex-row gap-4 mt-2 sm:mt-0">
                            <span className="font-bold text-xs text-gray-300 hidden sm:flex">124 Properties</span>
                            <button type="button" className="py-0.5 px-2 mb-2 text-xs font-medium text-gray-300 focus:outline-none bg-transparent rounded-sm border border-gray-200 hover:opacity-90">More search options</button>
                            <button type="button" className="py-0.5 px-2 mb-2 text-xs font-medium text-gray-300 focus:outline-none bg-tahiti rounded-sm uppercase hover:bg-opacity-75" style={{ 'backgroundColor': '#fc495d' }}>Search</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}