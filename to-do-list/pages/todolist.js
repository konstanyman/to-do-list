import { useEffect, useState } from "react";
import axios from "axios";

export default function ToDoList() {
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
            id: Math.random(),
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

    const addTask = () => {
        
    }
    
    const deleteTask = () => {

    }

    const markDone = () => {

    }

    const cancelUpdate = () => {

    }

    const changeTask = (event) => {

    }

    const updateTask = () => {

    }
    
    return (
        <div>
            <div>
                <p>To-do-list</p>
            </div>
            <div>
                <input
                    value={task}
                    onChange={ (e) => setTask(e.target.value)}
                />
                <button onClick={handleTaskSubmit}>Add new task</button> 
                <button>Menu</button>
                <button onClick={fetchTasks}>Get all tasks</button>
            </div>
            <div>
                
            </div>            
        </div>
    );
};