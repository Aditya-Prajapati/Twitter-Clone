import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Searchbar from "./Searchbar";
import ProfileBox from "./ProfileBox/ProfileBox";
import TweetArea from "./Feed/TweetArea";
import Tweet from "./Feed/Tweet";
import ExplorePanel from "./ExplorePanel/ExplorePanel";
import Header from "./Header/Header.jsx";

export default function App(){

    return (
        <div className="d-flex">

            <Sidebar />
            
            <div className="d-inline-flex flex-column" style={{ marginLeft: "160px" }}>
                {/* <ProfileBox /> */}
                <Header heading="Home" subHeading="" />
                <TweetArea />
                <Tweet />
            </div>

            <div className={"d-inline-flex flex-column"} style={{ margin: "0 50px" }}>

                <div className="sticky-top">
                    <Searchbar />
                    <ExplorePanel />
                </div>

            </div>
            
        </div>
    );
}