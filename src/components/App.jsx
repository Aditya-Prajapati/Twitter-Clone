import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import Profile from "../Pages/Profile";

import Sidebar from "./Navbars/Sidebar";
import MobileNavbar from "./Navbars/MobileNavbar";
import Searchbar from "./Searchbar/Searchbar";
import ProfileBox from "./ProfileBox/ProfileBox";
import TweetArea from "./Feed/TweetArea";
import Tweet from "./Feed/Tweet";
import SidePanel from "./SidePanel/SidePanel";
import Header from "./Header/Header.jsx";
import MediaQuery from "react-responsive";
import Section from "./Section/Section.jsx";
import Trending from "./Trending/Trending.jsx";
import { useMediaQuery } from "react-responsive";
import "./App.css";

export default function App() {

    const isDesktop = useMediaQuery({
        query: "(min-width: 1000px)"
    })

    const isTablet = useMediaQuery({ 
        query: "(min-width: 600px)"
    })

    const isMobile = useMediaQuery({
        query: "(max-width: 599px)"
    })

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <Home /> } />
                <Route path="/explore" element={ <Explore /> } />
                <Route path="/profile" element={ <Profile /> } />

            </Routes>
        </BrowserRouter>
        // <div className="d-flex main-container">
        //     {/* <Section /> */}
        //     {/* <Trending /> */}
            
        //     <div className="d-inline-flex">
        //         {(isTablet || isDesktop) && <Sidebar />}
        //     </div>

        //     <div className="d-inline-flex flex-column feed">
        //         {/* <ProfileBox /> */}
        //         {(isTablet || isDesktop) && <Header heading="Home" subHeading="" />}
        //         <TweetArea />
        //         <Tweet />
        //         {isMobile && <MobileNavbar />}
        //     </div>

        //     <div className={"d-inline-flex flex-column side-panel"}>

        //         {isDesktop && <div className="sticky-top">
        //             <Searchbar />
        //             <ExplorePanel />
        //         </div>} 

        //      </div>

        // </div>
    );
}