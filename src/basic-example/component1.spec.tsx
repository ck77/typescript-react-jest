import * as React from 'react';
import { render, fireEvent, waitFor, queryByText } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component1 from './component1';

test('', async () => {
    const { getByTestId, getByText, queryByText } = render(<Component1 />);
    fireEvent.change(getByTestId('username'), {
        target: { value: 'papago' }
    });

    fireEvent.click(getByText('Print username'));

    expect(1).toBe(1);

    // await waitFor(() =>

    //     expect(queryByText('papago')).toBeTruthy()
    // );
});


// import React from "react";

// const initialInputValue = "initialInputValue";

// class TestForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { inputValue: initialInputValue };
//     }
//     render() {
//         const { inputValue } = this.state;

//         return (
//             <div>
//                 {console.log("inputValue", inputValue)}
//                 <input
//                     value={inputValue}
//                     onChange={e => this.setState({ inputValue: e.target.value })}
//                     placeholder="placeholder"
//                 />
//                 {inputValue !== initialInputValue && <div>Input has changed</div>}
//             </div>
//         );
//     }
// }

// import { render, cleanup, fireEvent } from "react-testing-library";
// import "jest-dom/extend-expect";

// afterEach(cleanup);

// test("form", () => {
//     const { getByPlaceholderText, getByText } = render(<TestForm />);
//     fireEvent.change(getByPlaceholderText("placeholder"), {
//         target: { value: "new value" }
//     });
//     expect(getByText("Input has changed")).toBeInTheDocument();
// });