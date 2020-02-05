import React from 'react';

function NotesListItem({
    title,
    id,
    handleClick,
    // key,
}) {
    return (
        <li
            onClick={()=>{
                handleClick(id)
                
            }}
        >
            {title}
        </li>
    )
}

export default NotesListItem;