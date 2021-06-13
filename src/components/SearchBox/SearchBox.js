import React from 'react';
//import tachyons from 'tachyons';
const SearchBox = ({ searchChange }) => {
    return (
            <div id="searchbox">
                <input id='search-input' className='tc pa2 navy bg-light-blue' type="search" placeholder='search a robot' onChange={searchChange}/>
            </div>
    );
}


export default SearchBox;
