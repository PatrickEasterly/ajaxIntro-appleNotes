import React from 'react';

function Two(props) {
    return (
        <div>
        <input placeholder="Enter" onChange={props._updateTwo} value={props.second}></input>
        </div>
    )
}

export default Two;