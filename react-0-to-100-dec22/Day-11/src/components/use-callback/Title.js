
import React from 'react'

function Title() {
    console.log('Title Component');
    return (
        <div>React.memo and useCallback</div>
    )
}

export default React.memo(Title)