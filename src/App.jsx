import React, { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import TodoContainer from './components/TodoContainer'
import TodoFilter from './components/TodoFilter'
import { STATUS } from './config/status'

function App() {
  const [ todos, setTodos ] = useState( [] )
  const [ filterStatus, setFilterStatus ] = useState( `${STATUS.IS_CREATE},${STATUS.IS_DONE}` )

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

  const handleStatusChange = (status) => {
    setFilterStatus(status)
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title"> to do list </h2>
      <ToDoItem onSubmit={handleSubmit} />
      <TodoFilter filterStatus={filterStatus} onFilterStatus={handleStatusChange} />
      <TodoContainer 
        filterStatus={filterStatus}
        todos={todos} 
        onOperate={handleOperate} 
      />
    </div>
  )
}

export default App
