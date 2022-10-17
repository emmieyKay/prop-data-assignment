import CTACard from "./CTACard"
import FeatureSlider from "./property-features/FeatureSlider"
import HeaderSlider from "./home-header/HeaderSlider"
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loadCTA } from "../redux/actions"

export default function Home() {

    const dispatch = useDispatch();

    const cards = useSelector((state) => state.ctaReducer.items)


    useEffect(() => {
        dispatch(loadCTA())
    }, [cards.length, dispatch])
    return (
        <div className="flex flex-col w-full">
            <HeaderSlider />
            <div className="mt-12 max-w-screen-lg mx-auto w-full flex-col px-8 xl:px-0 justify-center text-center">
                <div className="text-center text-2xl font-semibold mb-4 my-title ">Lorem ipsum dolor sit amet</div>
                <p className="text-sm text-gray-300 mb-6">Lorem ipsum dolor sit amet. Est autem aliquam ut voluptatem dolores id eaque natus aut quia enim sit commodi culpa vel nulla pariatur. A galisum similique in consequatur laudantium cum molestiae omnis vel assumenda vero in ullam ipsa et repellat deserunt. Non quod magnam est culpa consectetur ad dolorem earum sit necessitatibus itaque est dolorum veritatis qui galisum incidunt sit repudiandae quaerat.</p>
                <button type="button" className="py-2 px-4 my-2 rounded font-medium text-white focus:outline-none bg-tahiti uppercase hover:bg-opacity-75" style={{ 'backgroundColor': '#fc495d' }}>Search</button>

            </div>
            <div className="mx-auto max-w-screen-xl px-4 my-12 w-full flex-col">
                <div className="text-center text-2xl font-semibold mb-4 my-title tracking-wide">Featured Properties</div>
                <FeatureSlider />
            </div>
            <div className="my-12 max-w-screen-lg mx-auto w-full flex-col px-8 xl:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cards.map((item, index) => {
                        return (<CTACard key={index} details={item} />)
                    })}
                </div>

            </div>
        </div>
    )
}