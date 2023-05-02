import { useState } from "react";

function ToDoList(props) {
    const [toDoList, setToDoList] = useState([
        {id: Math.random(), title: 'Task', status: false}
    ]);
    const [newTask, setNewTask] = useState([]);
    const [updateData, setUpdateData] = useState([]);

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
                <button>Add new task</button> 
                <button>Menu</button>
            <div>
                {/* <TaskInput 
                    visible={taskModalVisible} 
                    onAddTask={addTaskHandler}
                    onCancel={endAddTaskHandler}/>
                    <FlatList 
                        data={toDoList}
                        renderItem={itemData => {
                            return (
                                <TaskItem 
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteTask={deleteTaskHandler}/>
                            );
                        }}/> */}
            </div>            
        </div>
    );
};

export default ToDoList;