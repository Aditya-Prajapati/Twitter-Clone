import React from "react";
import FollowButton from "../Buttons/FollowButton"

export default function ExplorePanelItem() {

    return (
        <li className="list-group-item explore-panel-item">

            <div className="circle-img" style={{ marginRight: "12px" }}>
                <a href="#" className="d-inline-flex align-items-center justify-content-center">
                    <img src="https://github.com/mdo.png" alt="profile_img" className="rounded-circle circle-img"></img>
                </a>
            </div>

            <div className="explore-panel-item-content" >
                <div style={{ display: "inline-flex", flexDirection: "column" }}>
                    <h5>Marco Polo</h5>
                    <a href="#"> <span>@marcopolo</span> </a>
                </div>

                <FollowButton />
            </div>
            
        </li>
    );
}