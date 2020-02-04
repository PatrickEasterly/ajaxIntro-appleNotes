import React from 'react';

function One(props) {
    return (
        <div>
        <input onChange={props._updateOne} placeholder={props.first}></input>
        </div>
    )
}

export default One;