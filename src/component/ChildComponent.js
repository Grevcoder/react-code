import React from 'react'

function ChildComponent({parentToChild}) {
    return (
        <div>
            
            {parentToChild}
            <h1></h1>
        </div>
    )
}

export default ChildComponent;