import React, { Component } from 'react';

class Length extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <h2>Length Checker</h2>
                <label>Input: </label>
                <input
                    onChange={this.handleChange}
                    value={this.state.input}
                />
                <p>
                    Length: {this.state.input.length}
                </p>
            </div>

        );
    }
}

export default Length;
