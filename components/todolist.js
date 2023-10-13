import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDoList = ({task, deleteTask, toggleComplete}) => {
    
    return (
        <div className="TodoList" onClick={() => toggleComplete(task.id, task.status)}>
            <p className={`${task.status ? 'completed-task' : "task"}`}>{task.task}</p>
            <FontAwesomeIcon className='fa-trash' icon={faTrash} onClick={() => deleteTask(task.id)} />
        </div>
    );
};