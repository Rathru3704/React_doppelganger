import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input className='dib br3 bn pt2 ph4-ns pb3 mb3 orange bg-near-black shadow-4' type='search' onChange={searchChange} placeholder='search doppelganger'/>
        </div>
    );
}

export default SearchBox;