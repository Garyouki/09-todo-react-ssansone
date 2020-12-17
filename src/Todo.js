import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            completed: this.props.completed
        }
        this.check = this.check.bind(this);
       
    }

    check(event) {

    var self= this;
        var data = {
        completed: true
    };
    var toCheck = event.target.parentNode;
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("check");
            self.setState({
                completed:true
    });

} else if (this.readyState === 4) {

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

    var className = "todo";
  if (this.state.completed) {
    className = "todo completed";
  }

    return (
    
<div id={this.props.id} className={className}>
        
        <p className="text"> {this.props.text} </p>
        <button id= "check" className="check" type="checkbox" onClick={this.check}></button>
        <button id= "delete" className="delete" onClick={this.props.deleteTodo}>Delete</button>

        
      </div>
    );
  }
}

export default Todo;
