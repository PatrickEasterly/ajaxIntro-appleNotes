import React from 'react';

function One(props) {
    return (
        <div>
        <input placeholder="Enter" onChange={props._updateOne} value={props.first}></input>
        </div>
    )
}

export default One;