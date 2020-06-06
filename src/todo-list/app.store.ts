import { observable, computed, action } from 'mobx';
import Task from './task';

export default class AppStore {
    @observable TaskList: Task[] = [];

    @computed
    get taskDoneCount() {
        return this.TaskList.filter(x => x.done).length;
    }

    constructor() {
        this.TaskList = this.Init();
    }

    @action.bound
    addTask(name: string) {
        this.TaskList.push(new Task(name));
    }

    @action.bound
    RemoveTask(id: number) {
        this.TaskList = this.TaskList.filter(x => x.Id != id);
    }

    private Init() {
        let list: Task[] = [];
        list.push(new Task('aaa'));
        list.push(new Task('bbb', true));
        list.push(new Task('ccc'));
        return list;
    }
}

