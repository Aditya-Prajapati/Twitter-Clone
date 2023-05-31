import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Searchbar from "./Searchbar/Searchbar";
import ProfileBox from "./ProfileBox/ProfileBox";
import ExplorePanel from "./ExplorePanel/ExplorePanel";

export default function App(){

    return (
        <div style={{ display: "flex" }}>

            <Sidebar />
            <ProfileBox />

            <div style={{ display: "inline-flex", flexDirection: "column", marginLeft: "50px" }}>
                <Searchbar />
                <ExplorePanel />
            </div>
            
        </div>
    );
}