import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItems(props){

    return (
        <li className="nav-item">

            <a href="#" className="nav-link py-3">
                <FontAwesomeIcon icon={props.iconName} color={props.iconColor} size={props.iconSize} />
            </a>
            
        </li>  
    );
}