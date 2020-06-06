import * as React from 'react';
import { render, fireEvent, screen, queryByText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom'

import Task from './task';
import Todo from './todo';


describe('render', () => {

    test('render task name', () => {
        const task = new Task('papago');
        const removeTask = jest.fn();

        render(<Todo task={task} removeTask={removeTask} ></Todo>);

        expect(screen.queryByText(task.name)).toBeInTheDocument;
    });

});

describe('action', () => {
    test('click remove task btn', () => {
        const task = new Task('papago');
        const removeTask = jest.fn();

        render(<Todo task={task} removeTask={removeTask} ></Todo>);

        fireEvent.click(screen.getByText('RemoveTask'));
        expect(removeTask).toHaveBeenCalled();
    });

    test('toggle checkbox', () => {
        const task = new Task('papago');
        const removeTask = jest.fn();

        render(<Todo task={task} removeTask={removeTask} ></Todo>);

        expect(screen.getByTestId(task.Id.toString())).not.toBeChecked();

        fireEvent.click(screen.getByTestId(task.Id.toString()));

        expect(screen.getByTestId(task.Id.toString())).toBeChecked();
    });
});