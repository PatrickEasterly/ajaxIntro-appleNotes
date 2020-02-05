import React from 'react';

SearchBar.defaultProps = {
    text: 'Default props'
}

function SearchBar({
    text,
    handleChange
}) {
    return (
        <input 
        value={text}
        placeholder="Search notes"
        onChange={(event)=> {
            handleChange(event.target.value)
        }}
        />
    )
}

export default SearchBar;