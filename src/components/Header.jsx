import React from "react";
import "./Header.css";

export default function Header(props){

    return (
        <nav className="header">
            <h5> {props.heading} </h5>
            <p> {props.subHeading} </p>
        </nav>
    );
}