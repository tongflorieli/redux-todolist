import React from 'react';

class TodoList extends React.Component{
    
    render(){
        return(
            <div>
                <ul>
                    <li>test</li>
                    {this.props.todoReducerProp.todo.map((e,index)=>{return <li>{e.content}</li>})}
                </ul>
            </div>
        );
    }
}

export default TodoList;