import react from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(){

    return (
        <div className="searchbar">

            <SearchIcon className="searchIcon" fontSize="large" sx={{ color: "rgb(83, 100, 113)" }} />
            <input type="text" placeholder="Search Twitter" />
            
        </div>
    );
}