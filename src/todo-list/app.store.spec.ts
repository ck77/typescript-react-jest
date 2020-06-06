import AppStore from './app.store';

test('task done count', () => {
    const store = new AppStore();
    expect(store.taskDoneCount).toBe(1)
});

test('add task', () => {
    const store = new AppStore();
    store.addTask('sss');
    expect(store.TaskList.length).toBe(4);
});

test('remove task', () => {
    const store = new AppStore();
    const taskId = store.TaskList[0].Id;
    store.RemoveTask(taskId);
    const result = store.TaskList.filter(x => x.Id == taskId);
    expect(result).toEqual([]);
})