import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { ToDoList } from './todolist';

export const ToDoWrapper = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        fetchTasks()
    }, [])

    // Fetch all tasks
    const fetchTasks = async () => {
        // Send GET request to 'tasks/all' endpoint
        axios
        .get('http://localhost:4001/tasks/all')
        .then(response => {
            // Update the tasks state
            setTasks(response.data)
        console.log(tasks)
        })
        .catch(error => console.error(`There was an error retrieving the task list: ${error}`))
    }

    // Create new task
    const handleTaskCreate = () => {
        // Send POST request to 'tasks/create' endpoint
        axios
        .post('http://localhost:4001/tasks/create', {
            id: uuidv4(),
            task: task,
            status: false
        })
        .then(res => {
            console.log(res.data)

            console.info(`Task ${task} added.`)

            // Fetch all tasks to refresh
            // the tasks on the tasks list
            fetchTasks()
        })
        .catch(error => console.error(`There was an error creating the ${task} task: ${error}`))
    }


    // Submit new task
    const handleTaskSubmit = () => {
        // Check if all fields are filled
        if (task.length > 0) {
            // Create new task
            handleTaskCreate()

            // Reset all input fields
            handleInputsReset()
        }
    }

    // Reset all input fields
    const handleInputsReset = () => {
        setTask('');
    }

    // Delete task
    const handleTaskDelete = (id) => {
        // Send DELETE request to 'tasks/"id"' endpoint
        axios
        .put('http://localhost:4001/tasks/delete', { id: id })
        .then(res => {

            console.info(`Task deleted.`)

            // Fetch all tasks to refresh
            // the tasks on the tasks list
            fetchTasks()
        })
        .catch(error => console.error(`There was an error deleting task: ${error}`))
    }

    // Toggle task comletion
    const toggleComplete = (id, status) => {
        // Send POST request to 'tasks/toggle' endpoint
        axios
        .patch('http://localhost:4001/tasks/toggle', { id: id, status: status })
        .then(() => {

            console.info(`Task edited.`)

            // Fetch all tasks to refresh
            // the tasks on the tasks list
            fetchTasks()
        })
        .catch(error => console.error(`There was an error editing task: ${error}`))
    }

    const handleKeyPress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleTaskSubmit();
      }
    };


    return(
        <div className='TodoWrapper'>
            <h1>To-do-list</h1>
            <div className='TodoInput'>
                <input 
                    className='todo-input'
                    placeholder='Your task here'
                    value={task}
                    onChange={ (e) => setTask(e.target.value)}
                    maxLength='300'
                    onKeyDown={handleKeyPress}
                />
                <button id='myBtn' className='todo-btn' onClick={handleTaskSubmit}>Add Task</button>
            </div>
            <div>
                <ul>
                    {tasks.map((todolist) => (
                        <ToDoList
                            key={todolist.id}
                            task={todolist}
                            deleteTask={handleTaskDelete}
                            toggleComplete={toggleComplete}
                        />
                    ))}
                </ul>
            </div>
        </div>       
    )
}