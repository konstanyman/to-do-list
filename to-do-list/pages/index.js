import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import ToDoList from './todolist'

function startToDoList() {
  
}

function endToDoList() {
  
}

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
