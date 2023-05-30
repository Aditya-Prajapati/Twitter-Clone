import React from "react";
import NavItem from "./NavItem";
import { faHouse, faHashtag, faUser } from "@fortawesome/free-solid-svg-icons";
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Sidebar() {

    return (
        <div className="d-inline-flex flex-column p-2 sidebar">

            {/* Logo */}
            <a href="#" className="p-3">
                <TwitterIcon fontSize="large" sx={{ color: "#1da1f2" }} />
            </a>

            {/* Icons */}
            <ul className="nav flex-column mb-auto text-center">
                <NavItem iconName={faHouse} iconColor={"black"} iconSize={"xl"} />
                <NavItem iconName={faHashtag} iconColor={"black"} iconSize={"xl"} />
                <NavItem iconName={faUser} iconColor={"black"} iconSize={"xl"} />
            </ul>

            {/* Profile Icon */}
            <div className="dropdown border-top">
                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis dropdown-toggle" data-bs-toggle="dropdown">
                    <img src="https://github.com/mdo.png" alt="profile_img" className="rounded-circle circle-img"></img>
                </a>

                <ul className="dropdown-menu text-small shadow">
                    <li>
                        <a className="dropdown-item" href="#">Logout</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}