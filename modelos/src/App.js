import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import TodoForm from './componentes/TodoForm';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  removeTodo(index){
    this.setState({
      todos:this.state.todos.filter((e, i) =>{
        return i !== index
      })
    });
  }
  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  render(){
    const todos = this.state.todos.map((todo, i)=> {
      return (
        <div className="col md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
            <h3>{todo.titulo}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {todo.prioridad}
            </span>
            </div>
            <div className="card-body">
              {todo.descripcion}
            </div>
            <div className="card-footer">
              <button className="btm btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
         </div>
        </div>
      )
    });
    return(
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className ="navbar-brand" href="/">
          Tareas
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
          </a> 
        </nav>
        <div className= "container">
          <div className="row mt-4">
            <div className ="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo"/>
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className ="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
