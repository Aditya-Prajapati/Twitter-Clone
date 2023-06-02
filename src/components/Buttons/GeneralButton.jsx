import React from "react";
import "./Buttons.css";

export default function FollowButton(props){
    
    return (
        <div className="d-flex align-items-center">

            <button 
                className="general-button"
                type={props.type} 
                style={{ backgroundColor: `${props.bgc}` }}>

                <a href="" className="anchor" style={{ color: `${props.color}` }}> 
                    {props.text} 
                </a> 
            </button>

        </div>
    );
}