import './Homepage.css';
import React, { useState } from 'react';
import flower from '../../assets/flower.jpg';
import { Link, NavLink } from 'react-router-dom';
import PostList from '../../PostList';
import Blog from '../Blog/Blog';

export default function Homepage () {

// when the user scroll down the page is gonna be purple
//and then after the scroll go back to the previos color (yellow)
  function onScroll() {


      return (
          <div>

          </div>
      )
  }  

  

  const title = 'Welcome to your colorfull Todo App!';

  //const link = 'http://www.goggle.com';

  //const styles = {
  //  display: "alignCenter"
  //}

  const [todos, setTodos] = useState([
    {
      content: 'Clean bathroom',
      completed: true,
    },
    {
      content: 'Tidy livingroom',
      completed: false,
    },
    {
      content: 'Build a todo app in React',
      completed: false,
    }
  ]);

  window.localStorage.setItem('todos', JSON.stringify(todos));


   function deleteTodo (id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos); 
 }

   function handleKeyDown() {

   }

   //function createTodoAtIndex(event, i) {

   //}

   //function updateTodoAtIndex(event, i) {

   //}


    return (
        <div>
            <div className="app">
          <div className='container'>
            <h1>{ title }</h1>
            <p>{ 'hello, what is your todo today?' }</p>  
         <div className='hover-container'> 
          <div className='overlay'>
          <img className="flower" src={flower} alt="image-banner" />
          </div>
          <form className="todo-list">
            <ul>
              {todos.map((todo, i) => (
              <div className="todo">
                <div className="checkbox" />
                <input 
                  type="text" 
                  value={todo.content}
                  deleteTodo={deleteTodo} 
                  onKeyDown={e => handleKeyDown(e, i)} 
                  />
              </div>
              ))}
            </ul>
            <button>Save</button>
          </form>
          </div>
          </div>
        </div>

        </div>
    )
}