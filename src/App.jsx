import React, { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import TodoContainer from './components/TodoContainer'

function App() {
  const [ todos, setTodos ] = useState( [] )

  const handleSubmit = (todoItem) => {
    console.log(todoItem)
    setTodos([
      ...todos,
      todoItem
    ])
  }

  const handleOperate = (todoItem) => {
    const newTodos = todos.filter(todo => todo.id !== todoItem.id);
    newTodos.push(todoItem);
    setTodos(newTodos)
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title"> to do list </h2>
      <ToDoItem onSubmit={handleSubmit} />
      <TodoContainer todos={todos} onOperate={handleOperate}/>
    </div>
  )
}

export default App
