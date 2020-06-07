import * as React from "react";

import HiddenMessage from './hidden-message';
import Component1 from './component1';

const App = () => {
    return (
        <React.Fragment>
            <HiddenMessage>papago</HiddenMessage>
            <Component1></Component1>
        </React.Fragment>
    )
}

export default App;