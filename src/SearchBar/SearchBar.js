import React from 'react';
import './SearchBar.css'

const SearchBar=()=>{
    return(
        <div className="SearchBar">
            <input type="search" placeholder="Enter UserName"/>
            <input type="button" name="Search" value="Search" className="Search_button"/>
        </div>
    )
}
export default SearchBar;