import './Create.css';
import React, { useEffect, useState } from 'react';
import TodoList from '../../TodoList.js';
import axios from 'axios';

export default function Create (props) {
    
    const [todos, setTodos] = useState(() => [
        {
           id: '',
           title: '',
           completed: false,
         }
       ]);

    const [isEditing, setIsEditing] = useState(false);

    const [currentTodo, setCurrentTodo] = useState('');

      React.useEffect(() => {
          fetchTodos()
      }, []);
    
    const [todo, setTodo] = useState('');

    //const newTodosLocalStorageSaved = todos;

    //window.localStorage.setItem('todos', JSON.stringify(newTodosLocalStorageSaved));
    //setTodo(newTodosLocalStorageSaved)

    //useEffect(() => {
    //    localStorage.setItem("todos", JSON.stringify(todos));
    //}, [todos]);

    function handleInputChange(e) {
        setTodo(e.target.value);
        //const newTodo = e.target.value;
    }

    function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            title: '',
            completed: false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo(newTodo);
        console.log(newTodo);

    //window.localStorage.setItem('todos', JSON.stringify(todos));
    //setTodo(todos)

    }

    function handleEditClick (todo) {
       setIsEditing(true); 
       setCurrentTodo({...todo});
    }

    function deleteTodo (id) {
       const newTodos = todos.filter(todo => todo.id !== id);
       setTodos(newTodos); 
    }

    function handleUpdateTodo (id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo.id;
        });
        setIsEditing(false);
        setTodos(updatedItem);
    }


      const fetchTodos = () => {
          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then((response) => {
              setTodos(response.data)
          })
      }
    
    return (
        <div className=''>
            <TodoList
            //title='Blogs'
            todos={todos} 
            deleteTodo={deleteTodo}
            handleEditClick={handleEditClick}
            handleFormSubmit={handleFormSubmit}
            handleEditInputChange={handleEditInputChange}
            handleInputChange={handleInputChange} />
        </div>
    )
}