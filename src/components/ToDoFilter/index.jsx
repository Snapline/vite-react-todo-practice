import React, { useState } from 'react';
import { Radio } from 'antd'
import { STATUS } from '../../config/status'

const ToDoFilter = (props) => {
    const { filterStatus, onFilterStatus } = props;

    const handleStatusChange = (event) => {
        const value = event.target.value;
        onFilterStatus && onFilterStatus(value)
    }

    return(
        <div className="todo-filter">
            <Radio.Group value={filterStatus} onChange={handleStatusChange}>
                <Radio.Button value={`${STATUS.IS_CREATE},${STATUS.IS_DONE}`}>All</Radio.Button>
                <Radio.Button value={`${STATUS.IS_CREATE}`}>To Do</Radio.Button>
                <Radio.Button value={`${STATUS.IS_DONE}`}>Done</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default ToDoFilter