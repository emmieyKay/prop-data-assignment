import EAAB from '../../assets/Associations/EAAB/Light.png';
import IEASA from '../../assets/Associations/IEASA/Light.png';
import footerIcon from '../../assets/footer-icon.svg';
import facebookIcon from '../../assets/Facebook.svg';
import twitterIcon from '../../assets/Twitter.svg';
import youtubeIcon from '../../assets/YouTube.svg';

import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="w-full bg-slate-800 py-12 text-neutral-300 px-8">
            <div className="max-w-screen-lg mx-auto w-full flex-col">
                <div className="flex flex-row space-x-8">
                    <NavLink to="/" className="flex items-center">
                        <img src={EAAB} className="h-12 sm:h-16" alt="Logo" />
                    </NavLink>
                    <NavLink to="/" className="flex items-center">
                        <img src={IEASA} className="h-12 sm:h-16" alt="IEASA" />
                    </NavLink>
                </div>
                <div className="flex flex-row w-full items-center mt-6 text-xs">
                    <div className="flex flex-row flex-wrap space-x-[0.5px]">
                        <span className="after:content-[':'] after:text-neutral-300">{`Browse`}</span>
                        <span className="px-0.5  after:content-['|'] after:ml-2 after:text-neutral-300">{`Residental For Sale [5]`}</span>
                        <span className="px-0.5 text-red-800 after:content-['|'] after:ml-2 after:text-neutral-300">{`Calculators`}</span>
                        <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Company Profile`}</span>
                        <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Agent Search`}</span>
                        <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Contact Us`}</span>
                        <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Website Map`}</span>
                        <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Links`}</span>
                        <span className="px-0.5">{`Privacy Policy `}</span>
                    </div>

                </div>

                <div className="border-gray-400 my-6 border-t-[0.1px]">
                    <div className="flex flex-row flex-wrap w-full items-center mt-6 text-xs text-neutral-300">

                        <div className="flex flex-row flex-wrap space-x-[0.5px]">
                            <span className="after:content-[':'] after:text-neutral-300">{`Residental For Sale [54]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Amanzimtoti [12]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{` Athlone Park [3]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Doonside [6]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Warner Beach [11]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{` St Winifreds [4]`}</span>
                            <span className="px-0.5 after:content-[':'] after:text-neutral-300">{` Residental To Let [54]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Amanzimtoti [12]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{` Athlone Park [3]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Doonside [6]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{`Warner Beach [11]`}</span>
                            <span className="px-0.5 after:content-['|'] after:ml-2 after:text-neutral-300">{` St Winifreds [4]`}</span>
                        </div>
                    </div>

                </div>
                <div className="flex w-full flex-col md:flex-row md:justify-between mt-3 md:mt-6">
                    <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
                        <img src={footerIcon} className="h-9" alt="footer-icon" />
                        <div className="flex flex-col text-xs">
                            <span className="px-0.5">{`Website Powered by Prop Data`}</span>
                            <span className="px-0.5">{`Copyright © 2019 Name`}</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8">
                        <img src={facebookIcon} className="h-4" alt="facebook-icon" />
                        <img src={twitterIcon} className="h-4" alt="twitter-icon" />
                        <img src={youtubeIcon} className="h-4" alt="youtube-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}