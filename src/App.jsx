import React, { useState } from 'react'
import ToDoItem from './components/ToDoItem'

function App() {
  const [ todos, setTodos ] = useState([])

  const handleSubmit = (todoItem) => {
    console.log(todoItem)
    setTodos({
      ...todos,
      todoItem
    })
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title"> to do list </h2>
      <ToDoItem onSubmit={handleSubmit}/>
    </div>
  )
}

export default App
