import './Homepage.css';
import React, { useState } from 'react';
import flower from '../../assets/flower.jpg';

export default function Homepage () {  

  const title = 'Welcome to your colorfull Todo App!';

  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState('');

  window.localStorage.setItem('todos', JSON.stringify(todos));

  function handleFormSubmit (e) {
    e.preventDefault();

    const newTodo = {
      id: todo.content,
      title: todo,
      completed: false,
  }
  setTodos([...todos].concat(newTodo))
  setTodo('');
  }


    return (
        <div>
            <div className="app">
          <div className='container'>
            <h1 className='title-style'>{ title }</h1>
            <p>{ 'hello, what is your todo today?' }</p>  
         <div className='hover-container'> 
          <div className='overlay'>
          <img className="flower" src={flower} alt="image-banner" />
          </div>
          <form onSubmit={handleFormSubmit} className="todo-list">
          <input type="title" 
                 value={todo}
                 onChange={(e) => setTodo(e.target.value)}/>
          </form>
          <div>{todo.title}</div>
          <button type='submit' className='save-button'>Add</button>
          </div>
          </div>
        </div>

        </div>
    )
}