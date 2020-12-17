import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div id="todo">
          <form onSubmit={this.props.addTodo}>
            <input id="" type="text" placeholder="Add To-Do..." value={this.props.input} onChange={this.props.onChange}/>
       
          <button id= "add" className="add" type="submit" onClick={this.props.addTodo}>Add to List</button>
          </form>
        </div>
      );
    }
}

export default NewTodo;
