import { Outlet } from "react-router-dom";
import NavBar from './NavBar'
import Footer from './Footer'
export default function Layout() {
    return (
        <div className="relative min-h-screen h-full w-full flex flex-col overflow-hidden">
           <div className="static h-full  flex flex-col">
           <NavBar />
            <div className="flex flex-auto w-full min-h-screen h-full overflow-y-auto">
                <div className="w-full">
                    <Outlet />

                </div>
            </div>
            <Footer />
           </div>
        </div>
    )
}