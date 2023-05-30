import React from "react";
import ExplorePanelItem from "./ExplorePanelItem"

export default function ExplorePanel(){

    return (  
        <div className="explore-panel">

            <ul className="list-group" >
                <h4 className="ms-1 p-4 pb-2">Who to follow</h4>

                <ExplorePanelItem />
                <ExplorePanelItem />
            </ul>

        </div>
    );
}