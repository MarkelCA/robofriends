import React from 'react';
//import tachyons from 'tachyons';
const SearchBox = ({ searchField, searchChange }) => {
    return (
        <React.Fragment>
            <div id="searchbox">
                <input id='search-input' className='tc pa2 navy bg-light-blue' type="search" placeholder='search a robot' onChange={searchChange}/>
            </div>
        </React.Fragment>
    );
}


export default SearchBox;
