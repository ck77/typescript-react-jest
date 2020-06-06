import * as React from "react";
import { observer } from "mobx-react";
import store from './app.store';
import Todo from './todo';

const appStore = new store();

const App = () => {

    const removeTask = (id: number) => {
        appStore.RemoveTask(id);
    }

    return (
        <div>
            <p>{appStore.taskDoneCount}</p>
            <div>
                <button onClick={() => appStore.addTask('sss')}>AddTask</button>
            </div>
            <ul>
                {
                    appStore.TaskList.map((todo, index) => {
                        return (
                            <Todo task={todo} removeTask={removeTask} key={index} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default observer(App);