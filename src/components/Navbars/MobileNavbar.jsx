import React from "react";
import NavItem from "./NavItem";
import "./MobileNavbar.css";
import { faHouse, faHashtag, faUser } from "@fortawesome/free-solid-svg-icons";

export default function MobileNavbar(){

    return (
        <div className="fixed-bottom bgc-white mobile-navbar">

            <ul className="nav justify-content-between mx-5">
                <a href="#"> <NavItem iconName={faHouse} iconColor={"black"} iconSize={"l"} style={{ padding: ".5rem" }} /> </a>
                <a href="#"> <NavItem iconName={faHashtag} iconColor={"black"} iconSize={"l"} style={{ padding: ".5rem" }} /> </a>
                <a href="#"> <NavItem iconName={faUser} iconColor={"black"} iconSize={"l"} style={{ padding: ".5rem" }} /> </a>
            </ul>

        </div>
    );
}