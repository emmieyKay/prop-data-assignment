import logo from '../../assets/logo.svg';

import { NavLink } from 'react-router-dom';
import React, { useState } from "react";

import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const [show, showMenu] = useState(false);

    let location = useLocation();
    return (
        <header>
            <nav className="bg-slate-800 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                    </NavLink>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">

                            <li>
                                <NavLink to="/" className={"block py-2 pr-4 pl-3 lg:p-0 hover:text-white  "+ (location.pathname==='/'?" text-white":" text-gray-300" )}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search"  className={"block py-2 pr-4 pl-3 lg:p-0 hover:text-white  "+ (location.pathname==='/search'?" text-white":" text-gray-300" )}>PROPERTY SEARCH</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tools"   className={"block py-2 pr-4 pl-3 lg:p-0 hover:text-white  "+ (location.pathname==='/tools'?" text-white":" text-gray-300" )}>TOOLS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"   className={"block py-2 pr-4 pl-3 lg:p-0 hover:text-white  "+ (location.pathname==='/about'?" text-white":" text-gray-300" )}>ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"   className={"block py-2 pr-4 pl-3 lg:p-0 hover:text-white  "+ (location.pathname==='/contact'?" text-white":" text-gray-300" )}>CONTACT</NavLink>
                            </li>

                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu" type="button" onClick={() => showMenu(!show)} className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none text-gray-400 hover:bg-gray-700" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                {show &&
                    <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                            <li>
                                <NavLink to="/" onClick={() => showMenu(!show)} className={"mb-2 block py-2 pr-4 pl-3 lg:p-0 hover:bg-blue-500 text-white"+ (location.pathname==='/'?" bg-blue-500":" bg-transparent" )}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search" onClick={() => showMenu(!show)} className={"mb-2 block py-2 pr-4 pl-3 lg:p-0 hover:bg-blue-500 text-white"+ (location.pathname==='/search'?" bg-blue-500":" bg-transparent" )}>PROPERTY SEARCH</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tools" onClick={() => showMenu(!show)} className={"mb-2 block py-2 pr-4 pl-3 lg:p-0 hover:bg-blue-500 text-white"+ (location.pathname==='/tools'?" bg-blue-500":" bg-transparent" )}>TOOLS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={() => showMenu(!show)} className={"mb-2 block py-2 pr-4 pl-3 lg:p-0 hover:bg-blue-500 text-white"+ (location.pathname==='/about'?" bg-blue-500":" bg-transparent" )}>ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() => showMenu(!show)} className={"mb-2 block py-2 pr-4 pl-3 lg:p-0 hover:bg-blue-500 text-white"+ (location.pathname==='/contact'?" bg-blue-500":" bg-transparent" )}>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
}