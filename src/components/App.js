import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../store/action';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <AddTodo creatorProp={this.props.addTodoCreator} />
        <TodoList todoReducerProp={this.props.todoList} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
      todoList: state.todoReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
      addTodoCreator: bindActionCreators(
          {
              addTodo
          },
          dispatch,
      ),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

