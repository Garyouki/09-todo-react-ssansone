import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  

  //referenced code snippets for 90% of project as well as my assignment 8 code
  //https://gist.github.com/kraigh/fb524c6db6cce065c2ba344724d3c993

  constructor(props) {
    super(props);
    
    this.state = {
        todos: [], input: ''
    };

    this.onChange =this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.sort = this.sort.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    
  }

  
  addTodo(event) {
    event.preventDefault();
    var self = this;

    const newTodoText = this.state.input;
    var data = {text: newTodoText};;
    
    var xhttp = new XMLHttpRequest();

// Response handler
xhttp.onreadystatechange = function() {

    // Wait for readyState = 4 & 200 response
    if (this.readyState === 4 && this.status === 200) {

     
        // parse JSON response
        self.setState({
          todos: [...self.state.todos, JSON.parse(this.responseText)]
        });
 
        self.setState({input:''});
    
    } else if (this.readyState === 4) {

        // this.status !== 200, error from server
      
    }
};

xhttp.open("POST", "https://cse204.work/todos", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("x-api-key", "e78d52-d76aec-34ec77-1f346d-940c93");
xhttp.send(JSON.stringify(data));
}



deleteTodo(event) {
  
  var self = this;

  //event.target.parentNode from assignment 8
  var id = event.target.parentNode.id;
  var xhttp = new XMLHttpRequest();

// Response handler
xhttp.onreadystatechange = function() {

  // Wait for readyState = 4 & 200 response
  if (this.readyState === 4 && this.status === 200) {


      // parse JSON response
      const remainingTodos = self.state.todos.filter((todo) => {
        // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
        if (todo.id !== id) {
          return todo;
        }
      });

      self.setState({todos: remainingTodos});
  
  } else if (this.readyState === 4) {
    console.log("nopeeee");
      // this.status !== 200, error from server
    
  }
};

xhttp.open("DELETE", "https://cse204.work/todos/" + id, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("x-api-key", "e78d52-d76aec-34ec77-1f346d-940c93");
xhttp.send();
}

componentDidMount() {
  //Make initial AJAX call to list todos
  
  const self = this;
  var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
      
    var todos = JSON.parse(this.responseText);
      self.setState({todos: todos});
     
      console.log(todos);
}
};

xhttp.open("GET", "https://cse204.work/todos", true);
xhttp.setRequestHeader("x-api-key","e78d52-d76aec-34ec77-1f346d-940c93");
xhttp.send();

}


sort(event) {
  
  var todos = this.state.todos;

  todos.sort(function (a, b) {
    return a.text.localeCompare(b.text);
  })
      this.setState({todos:todos});  
      console.log("sort");
}



onChange(event) {
  this.setState({
    input: event.target.value
  });
}

  render() {
    

    return (
      
<div className = "App">
<h1> Samantha's To-Do List: </h1>

<NewTodo addTodo={this.addTodo} newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} />
<button id= "sort" className="sort" onClick={this.sort}>Sort List Alphabetically</button>

{this.state.todos.map((todo) =>
  <Todo key={todo.id} id={todo.id} completed={todo.completed}
    text={todo.text} deleteTodo={this.deleteTodo} />
)}


</div>

    );
  }
}

export default App;
