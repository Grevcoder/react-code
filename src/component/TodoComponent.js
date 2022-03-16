import React  from "react";
class TodoComponent extends React.Component
{
    
    render()
    {
        return(
            <div><h1>Hello from create</h1>
            <p>Hello,{this.props.name}!</p>
            
            </div>
        )
    }
    
}

export default TodoComponent;