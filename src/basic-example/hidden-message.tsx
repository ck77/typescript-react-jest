import * as React from 'react';

interface IHiddenMessageProps {
    children?: React.ReactNode
}

class HiddenMessage extends React.Component<IHiddenMessageProps, { showMessage: boolean }> {
    constructor(props: IHiddenMessageProps) {
        super(props);
        this.state = {
            showMessage: false
        }

    }

    handleChange = () => {
        this.setState({ showMessage: !this.state.showMessage });
    }

    render() {
        return (
            <div>
                <label htmlFor="toggle">Show Message</label>
                <input id="toggle" type="checkbox" onChange={() => this.handleChange()} />

                {this.state.showMessage ? this.props.children : null}
            </div>
        )
    }
}

export default HiddenMessage;