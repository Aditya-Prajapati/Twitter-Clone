import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Searchbar from "./Searchbar/Searchbar";
import ExplorePanel from "./ExplorePanel/ExplorePanel";

export default function App(){

    return (
        <div>
            <Sidebar />
            <Searchbar />
            <ExplorePanel />
        </div>
    );
}