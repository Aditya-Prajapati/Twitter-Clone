import React from "react";
import GeneralButton from "../Buttons/GeneralButton";
import NameAndId from "../ProfileBox/NameAndId";
import ProfileImage from "../ProfileImage";

export default function ExplorePanelItem() {

    return (
        <li className="list-group-item explore-panel-item">

            {/* Image */}
            <div className="circle-img" style={{ marginRight: "12px" }}>
                <a href="#" className="d-inline-flex align-items-center justify-content-center">
                    <ProfileImage width={44} height={44} />
                </a>
            </div>

            {/* Content */}
            <div className="explore-panel-item-content" >
                <NameAndId />
                <GeneralButton bgc="rgb(39, 44, 48)" color="white" text="Follow" />
            </div>
            
        </li>
    );
}