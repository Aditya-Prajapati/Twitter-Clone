import React from "react";
import FollowButton from "../Buttons/FollowButton";
import NameAndId from "../ProfileBox/NameAndId";
import ProfileImage from "../ProfileImage";

export default function ExplorePanelItem() {

    return (
        <li className="list-group-item explore-panel-item">

            {/* Image */}
            <div className="circle-img" style={{ marginRight: "12px" }}>
                <a href="#" className="d-inline-flex align-items-center justify-content-center">
                    <ProfileImage width={48} height={48} />
                </a>
            </div>

            {/* Content */}
            <div className="explore-panel-item-content" >
                <NameAndId />
                <FollowButton />
            </div>
            
        </li>
    );
}