import React from "react";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import "../components/App.css";

import Sidebar from "../components/Navbars/Sidebar";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import Searchbar from "../components/Searchbar/Searchbar";
import TweetArea from "../components/Feed/TweetArea";
import Tweet from "../components/Feed/Tweet";
import SidePanel from "../components/SidePanel/SidePanel";
import Header from "../components/Header/Header.jsx";

export default function Home(){

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
        <div className="d-flex main-container">
            
            <div className="d-inline-flex">
                {(isTablet || isDesktop) && <Sidebar />}
            </div>

            <div className="d-inline-flex flex-column feed">
                {(isTablet || isDesktop) && <Header heading="Home" subHeading="" />}
                <TweetArea />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                {isMobile && <MobileNavbar />}
            </div>

            <div className={"d-inline-flex flex-column side-panel-container"}>

                {isDesktop && <div className="sticky-top">
                    <Searchbar />
                    <SidePanel />
                </div>} 

            </div>

        </div>
    );
}