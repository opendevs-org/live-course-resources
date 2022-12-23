import React from 'react'

function Button({ handleClick, name }) {
    console.log('Rendering Button: ', name);
    return (
        <button onClick={handleClick}>{name}</button>
    )
}

export default React.memo(Button)