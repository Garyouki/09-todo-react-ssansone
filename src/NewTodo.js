import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div id="todo">
          <form>
            <input id= "todo" type="text" placeholder="Add To-Do..." />
          </form>
        </div>
      );
    }
}

export default NewTodo;
