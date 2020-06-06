import * as React from "react";
import { observer } from "mobx-react";
import Task from './task';

interface IProps {
    task: Task;
    removeTask: Function;
}

const Todo = ({ task, removeTask }: IProps) => {
    return (
        <li>
            <input
                type='checkbox'
                checked={task.done}
                onChange={() => {
                    task.done = !task.done;
                }}
            />
            {task.name}
            <button onClick={() => removeTask(task.Id)}>RemoveTask</button>
        </li>
    )
}

export default observer(Todo);
