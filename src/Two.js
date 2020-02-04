import React from 'react';

function Two(props) {
    return (
        <div>
        <input onChange={props._updateTwo} placeholder={props.second}></input>
        </div>
    )
}

export default Two;