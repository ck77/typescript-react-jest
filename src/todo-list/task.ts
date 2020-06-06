import { observable } from 'mobx';

export default class Task {
    Id: number;
    @observable name: string;
    @observable done: boolean;

    constructor(name: string, done: boolean = false) {
        this.Id = Math.random();
        this.name = name;
        this.done = done;
    }
}