import * as React from 'react';

class Component1 extends React.Component<{}, { showUser: boolean, username: string }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showUser: false,
            username: ''
        }
    }


    handleClick = () => {
        setTimeout(() => {
            this.setState({ showUser: !this.state.showUser });
        }, 2000);

        // this.setState({ showUser: !this.state.showUser });
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ username: e.currentTarget.value })
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor="username">Username</label>
                <input id="username" data-testid="username" onChange={(e) => this.handleChange(e)} />
                <button onClick={() => this.handleClick()}>Print username</button>
                {this.state.showUser ? <p>{this.state.username}</p> : null}

            </React.Fragment>
        )
    }
}

export default Component1;