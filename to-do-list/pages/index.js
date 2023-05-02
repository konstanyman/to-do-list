import React from 'react'
import ToDoList from './todolist'



export default function Home() {
  return (
    <div>
      <div>
        <p>Menu</p>
      </div>
        <button>To-do-list</button> 
      <div>
        <ToDoList/>
      </div>
    </div>
  )
}
