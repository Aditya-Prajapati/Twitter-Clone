import React from "react";
import "./Tweet.css";
import ProfileImage from "../ProfileImage";
import NameAndId from "../ProfileBox/NameAndId";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Tweet() {

    return (
        <div className="card" style={{ width: "100%" }}>

            <div className="card-body">

                <div className="d-flex">

                    <div className="card-image">
                        <ProfileImage width={44} height={44} />
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <div className="d-flex justify-content-between">

                                <NameAndId />
                                <div className="dropdown">
                                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis dropdown-toggle" data-bs-toggle="dropdown"> </a>
                                    <ul className="dropdown-menu text-small">
                                        <li>
                                            <a className="dropdown-item" href="#"> Features here </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <p className="card-text my-3"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, nam tenetur nemo voluptate dicta quae expedita, illum magni laudantium repellat qui quam totam. Sequi ratione consequuntur eum quisquam debitis esse, quae quibusdam quo praesentium quis vitae soluta, dolor iusto est itaque. Ex commodi ab sed placeat consectetur! Nulla, incidunt. Eos? </p>

                            <div className="image-bg">
                                <img src="https://github.com/mdo.png" alt="tweet_img" className="tweet-image" />
                            </div>
                            
                        </div>

                        <div className="d-flex">
                            <a href="#" className="card-link ms-1"> <ModeCommentOutlinedIcon sx={{ color: "rgb(83, 100, 113)", fontSize: "18px" }} /> </a>
                            <a href="#" className="card-link ms-5"> <FavoriteBorderOutlinedIcon sx={{ color: "rgb(83, 100, 113)", fontSize: "18px" }} /> </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}