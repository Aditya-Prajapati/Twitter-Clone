import React from "react";
import Sidebar from "./Navbars/Sidebar";
import MobileNavbar from "./Navbars/MobileNavbar";
import Searchbar from "./Searchbar/Searchbar";
import ProfileBox from "./ProfileBox/ProfileBox";
import TweetArea from "./Feed/TweetArea";
import Tweet from "./Feed/Tweet";
import ExplorePanel from "./ExplorePanel/ExplorePanel";
import Header from "./Header/Header.jsx";
import MediaQuery from "react-responsive";
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
        <div className="d-flex main-container">
            
            <div className="d-inline-flex">
                {(isTablet || isDesktop) && <Sidebar />}
            </div>

            <div className="d-inline-flex flex-column feed">
                {/* <ProfileBox /> */}
                {(isTablet || isDesktop) && <Header heading="Home" subHeading="" />}
                <TweetArea />
                <Tweet />
                <Tweet />
                <Tweet />
                {isMobile && <MobileNavbar />}
            </div>

            <div className={"d-inline-flex flex-column explore"}>

                {isDesktop && <div className="sticky-top">
                    <Searchbar />
                    <ExplorePanel />
                </div>} 

            </div>

        </div>
    );
}