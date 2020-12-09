import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      
<div id="todo" className="todo">
        <button id= "add" className="add">Add to List</button>
        <p>Do A thing
        <input type="checkbox"></input>
        <button id= "delete" className="delete">Delete</button>

        </p>
      </div>
    );
  }
}

export default Todo;
