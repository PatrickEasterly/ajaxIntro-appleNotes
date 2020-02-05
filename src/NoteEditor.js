import React from 'react';

function NoteEditor({
    updateText,
    currentTextField
}) {
    return (
        <textarea value={currentTextField} onChange={(e)=>{
            // console.log(e.target.value)
            // set the state of the target (notes.copy) to target value
            updateText(e.target.value)
        }}/>
    )
}

export default NoteEditor;