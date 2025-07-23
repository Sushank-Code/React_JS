import React, { useState } from 'react'

const Search = ({ search, setsearch, handleSearch }) => {

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />
            <button onClick={handleSearch}> Search</button>
        </div>
    )
}

export default Search