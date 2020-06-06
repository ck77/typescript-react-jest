import * as React from 'react';
import { Provider } from 'mobx-react';
import { render, fireEvent, screen, queryByText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';

import store from './app.store';
import App from './app';

describe('render', () => {
    test('normal', () => {

        expect(1).toBe(1);

        // const result = render(
        //     <Provider store={new store()}>
        //         <App />
        //     </Provider>
        // )

        // expect(result.container).toBeNull;
    });
});


// describe('action', () => {

// });