import { useEffect, useState } from "react";
import axios from "axios";

import ConfirmModal from "./confirmmodal";

export default function ToDoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [taskModalVisible, setTaskModalVisible] = useState(false);

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

    // Delete task
    const handleTaskDelete = (id, task) => {
        // Send DELETE request to 'tasks/"id"' endpoint
        axios
        .put('http://localhost:4001/tasks/delete', { id: id })
        .then(() => {

            console.info(`Task ${task} deleted.`)

            // Fetch all tasks to refresh
            // the tasks on the tasks list
            fetchTasks()
        })
        .catch(error => console.error(`There was an error deleting the ${task} task: ${error}`))
    }
    
    return (
        <div>
            <div>
                <h1>To-do-list</h1>
                <input
                    value={task}
                    onChange={ (e) => setTask(e.target.value)}
                />
                <div>
                    <button onClick={handleTaskSubmit}>Add task</button>
                </div>
                <div>
                    <ul>
                        {tasks.map((todolist) => {
                            return <li key={todolist.id}>{todolist.task}</li>
                        })}
                    </ul>
                </div>
            </div>       
        </div>
    );
};

//{taskModalVisible  && <ConfirmModal text='Are you sure?' onClose={endAddTaskHandler} />}