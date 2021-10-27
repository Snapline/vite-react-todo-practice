import React, { useState } from 'react';
import { Input, Button } from 'antd'
import { STATUS } from '../../config/status'

const ToDoItem = (props) => {
    const {onSubmit} = props;

    const [todoItem, setTodoItem] = useState({});

    const handleSubmit = () => {
        onSubmit && onSubmit(todoItem)
    }

    const handleChange = (e) => {
        setTodoItem({
            id: Math.random(),
            content: e.target.value,
            status: STATUS.IS_CREATE
        })
    }

    return(
        <div className="todo-item-input">
             <Input value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} />
             <Button size="large" type="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default ToDoItem