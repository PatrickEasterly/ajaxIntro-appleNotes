import React from 'react';

function NotesListItem({
    title,
    id,
    key,
}) {
    return (
        <li>
            {title}
        </li>
    )
}

export default NotesListItem;