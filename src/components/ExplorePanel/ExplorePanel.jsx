import React from "react";
import ExplorePanelItem from "./ExplorePanelItem"

export default function ExplorePanel(){

    return (  
        <div className="d-inline-flex bgc-white explore-panel">

            <ul className="list-group" >
                <h5 className="ms-1 p-4 pb-2">Who to follow</h5>

                <ExplorePanelItem />
                <ExplorePanelItem />
            </ul>

        </div>
    );
}