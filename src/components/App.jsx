import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Searchbar from "./Searchbar";
import ProfileBox from "./ProfileBox/ProfileBox";
import TweetArea from "./Feed/TweetArea";
import Tweet from "./Feed/Tweet";
import ExplorePanel from "./ExplorePanel/ExplorePanel";
import Header from "./Header";

export default function App(){

    return (
        <div style={{ display: "flex" }}>

            <Sidebar />
            
            <div className="d-inline-flex flex-column" style={{ marginLeft: "160px" }}>
                {/* <ProfileBox /> */}
                <Header heading="Home" />
                <TweetArea />
                <Tweet />
            </div>

            <div className={"d-inline-flex flex-column"} style={{ margin: "0 50px" }}>
                <div style={{ position: "sticky", top: "0" }}>
                    <Searchbar />
                    <ExplorePanel />
                </div>
            </div>
            
        </div>
    );
}