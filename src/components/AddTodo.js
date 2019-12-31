import React from 'react';

class AddTodo extends React.Component{
    state = {input: ''};
    onInputChange = (e) =>{
        this.setState({input: e.target.value});
    }
    onEnter = () =>{
        this.props.creatorProp.addTodo(this.state.input);
        this.setState({input:''});
    }
    render(){
        return(
            <div>
                <input type='text' onChange={this.onInputChange}/>
                <button onClick={this.onEnter}>Add</button>
            </div>
        );
    }
}

export default AddTodo;