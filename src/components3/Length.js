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
                <label>{this.props.label}</label>

                { /* use the value of the state */}
                <input
                    onChange={this.handleChange}
                    value={this.state.input}
                    name={this.props.name}
                    className="form-control"
                />
                <p className="form-text text-muted">
                    Length: {this.state.input.length} characters
                </p>
            </div>

        );
    }
}

export default Length;
