import React from 'react';
import './SearchBar.css'

const SearchBar=(props)=>{
    return(
        <div className="SearchBar">
            <input type="search" placeholder="Enter UserName" onChange={props.changeInput}  onKeyDown={props.pressEnterHandler}/>
            <input type="button" name="Search" value="Search" className="Search_button" onClick={props.handleClick}/>
        </div>
    )
}
export default SearchBar;