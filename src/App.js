import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      
<div className = "App">
<h1> Samantha's To-Do List: </h1>
<section id="myTodos">
<Todo />
      </section>

</div>

    );
  }
}

export default App;
