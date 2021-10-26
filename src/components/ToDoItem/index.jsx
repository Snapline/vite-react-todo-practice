import React, { useState } from 'react';
import { Input, Button } from 'antd'
import { STATUS } from '../../config/status'

const ToDoItem = (props) => {
    const {onSubmit} = props;

    const [todoItem, setTodoItem] = useState({
        id: Math.random(),
        content:'',
        status: STATUS.IS_CREATE
    });

    const handleSubmit = () => {
        onSubmit && onSubmit(todoItem)
    }

    const handleChange = (e) => {
        setTodoItem({
            ...todoItem,
            content: e.target.value
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