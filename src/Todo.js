import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    //referenced code snippets for 90% of project as well as my assignment 8 code
  //https://gist.github.com/kraigh/fb524c6db6cce065c2ba344724d3c993

    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
        // this.deleteTodo = this.deleteTodo.bind(this);
    }

    check(event) {

    var self= this;
        var data = {
        completed: true
    };

    //event.target.parentNode from assignment 8
    var toCheck = event.target.parentNode.id;
    console.log(event.target.parentNode);
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("check");

            self.setState({
                completed:true
    });

} 

else if (this.readyState === 4) {

    // this.status !== 200, error from server
    console.log("no check");
}
    };
    
    xhttp.open("PUT", "https://cse204.work/todos/" + toCheck, true);
    
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key","e78d52-d76aec-34ec77-1f346d-940c93");
    xhttp.send(JSON.stringify(data));
    }
    


  render() {
    this.state = {
        completed: this.props.completed
    }
    var className = "todo";
  if (this.state.completed) {
    className = "todo completed";
  }

    return (
    
<div id={this.props.id}>
        
       

        <input id= "check" className="check" type="checkbox" onClick={this.check}></input>
        <p className="text"> {this.props.text} </p>
        <button id= "delete" className="delete" onClick={this.props.deleteTodo}>Delete</button>

        
      </div>
    );
  }
}

export default Todo;
