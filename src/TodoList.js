import './TodoList.css';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';

//const title = props.title;

const TodoList = ({todos, title, completed, todo, newTodos, newTodo, setTodo,
    handleFormSubmit, handleInputChange, handleDelete, 
    handleEditFormSubmit, isEditing, setIsEditing, handleEditInputChange, currentTodo, deleteTodo}) => {


    //const posts = props.posts;
    //const title = props.title;
    //const handleDelete = props.handleDelete;
    //const id = props.id;

    return (
        <div className="">
            {/*{isEditing ? (
                <form onSubmit={handleEditFormSubmit}>
                    <h2>Edit Todo</h2>
                    <label htmlFor='editTodo'>Edit todo:</label>
                    <input
                      name='editTodo'
                      type='text'
                      placeholder='Edit todo'
                      value={newTodo}
                      onChange={handleEditInputChange}
                    />
                    <button type='submit'>Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : ( */}
            <form onSubmit={handleFormSubmit}>
                <h2>Add Todo</h2>
                <label htmlFor='todo'></label>
                <input
                  name="todo"
                  type="text"
                  placeholder='Create todo'
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form> 
            {/* )}*/}
           <div className='todo-container' key={todos.id}>
            {todos.map((todo) => (
                <Todo key={todo.id}
                newTodos={newTodos}
                newTodo={newTodo}
                todo={todo} 
                title={title}
                completed={completed}
                deleteTodo={deleteTodo} />))}
           </div> 
        </div>
    )
}

export default TodoList;