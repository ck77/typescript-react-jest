import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import HiddenMessage from './hidden-message';

test('show message when checked', () => {
    const testMessage = "papago";

    render(
        <HiddenMessage>{testMessage}</HiddenMessage>
    )

    expect(screen.queryByText(testMessage)).toBeNull();
    fireEvent.click(screen.getByLabelText(/show/i));
    expect(screen.getByText(testMessage)).toBeInTheDocument()

})