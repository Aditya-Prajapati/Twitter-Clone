import react from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(){

    return (
        <div className="d-inline-flex align-items-center mt-2 bgc-white searchbar">

            <SearchIcon className="align-items-center ms-2 me-3" fontSize="medium" sx={{ color: "rgb(83, 100, 113)" }} />
            <input className="d-flex bgc-white" type="text" placeholder="Search Twitter" />
            
        </div>
    );
}