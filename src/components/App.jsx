import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Searchbar from "./Searchbar";
import ProfileBox from "./ProfileBox/ProfileBox";
import Tweet from "./Feed/TweetArea";
import ExplorePanel from "./ExplorePanel/ExplorePanel";
import Header from "./Header";

export default function App(){

    return (
        <div style={{ display: "flex" }}>

            <Sidebar />
            
            <div className="d-inline-flex flex-column">
                <Header />
                <Tweet />
            </div>

            {/* <ProfileBox /> */}

            <div className={"d-inline-flex flex-column"} style={{ marginLeft: "50px" }}>
                <Searchbar />
                <ExplorePanel />
            </div>
            
        </div>
    );
}