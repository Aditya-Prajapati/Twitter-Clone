import React from "react";
import NameAndId from "./NameAndId";
import EditProfileButton from "../Buttons/EditProfileButton";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ProfileImage from "../ProfileImage";

export default function ProfileBox(){

    return (
        <div>

            <img style={{width: "600px", height: "200px", backgroundColor: "rgb(207, 217, 222)"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQH2UMxfU-i4LTkj6HagKbwq5UzMzRYKaIQ&usqp=CAU" alt="cover_photo"></img>
            <div className={"profile-box"}>

                <ProfileImage width={133} height={133} style={{position: "absolute", bottom: "150px"}} />

                <div className="profile-box-btn">
                    <EditProfileButton />
                </div>
                <NameAndId />  

                <div className="profile-box-info">
                    <p> <CalendarMonthIcon sx={{fontSize: "16px"}} style={{verticalAlign: "center"}} /> Joined May 2023 </p>  
                    <p> <strong> 10 </strong> Following <strong> 2 </strong> Followers </p>
                </div>

            </div>

        </div>
    );
}