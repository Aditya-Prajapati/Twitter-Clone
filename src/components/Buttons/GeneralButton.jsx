import React from "react";

export default function FollowButton(props){
    
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <button 
                className="general-button"
                type={props.type} 
                style={{ backgroundColor: `${props.bgc}` }}> 
                <a href="" style={{ textDecoration: "none", color: `${props.color}` }}> 
                    {props.text} 
                </a> 
            </button>
        </div>
    );
}