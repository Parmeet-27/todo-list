import React , { useState } from 'react';
//import { useState } from './react/cjs/react.development';
import TodoForm from './TodoForm'
import Todo from './Todo';

export default function TodoList(){

    //state array that hold all todos
    const [todos,setTodos] = useState([]);

    //add todo to list
    const addTask = task => {
        if(!task.text) {
            return
        }
        const newTodos = [task,...todos];
        setTodos(newTodos);
    }

    //remove todo from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }

    //Task is completed
    const completedTask = id => {
        let updatedTasks= todos.map(todo => {
            if(todo.id == id) {
                todo.isComplete = true ;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }


    return <div>
        <TodoForm addTask = {addTask}></TodoForm>
        <Todo todos = { todos } completedTask = { completedTask } removeTask = { removeTask }></Todo>
    </div>;
}