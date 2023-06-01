import React from "react";
import ProfileImage from "../ProfileImage";
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import GeneralButton from "../Buttons/GeneralButton";
import "./TweetArea.css";

export default function TweetArea(){

    return (
        <div className={"d-flex tweet-area"}>
            <ProfileImage style={{ margin: "4px 12px 0 0" }} width={50} height={50} />

            <div className="d-flex flex-column">

                <form action="/" method="post">
                    <textarea cols="66" rows="2" placeholder="What is happening?!" style={{ border: "none", resize: "none", padding: "12px 0", outline: "none" }}></textarea>

                    <div className={"d-flex my-2"} style={{ justifyContent: "space-between", alignItems: "center"}}>

                        <div className={"d-flex"}>
                            <a href="#"> <CollectionsIcon className={"ms-1"} fontSize="small" sx={{ color: "#1da1f2" }} /> </a>
                            <a href="#"> <GifBoxIcon className={"ms-3"} fontSize="small" sx={{ color: "#1da1f2" }} /> </a>
                            <a href="#"> <SentimentSatisfiedAltIcon className={"ms-3"} fontSize="small" sx={{ color: "#1da1f2" }} /> </a>
                        </div>

                        <GeneralButton type="submit" bgc="#1da1f2" color="white" text="Tweet" />
                        
                    </div>
                </form>

            </div>
        </div>
);
}