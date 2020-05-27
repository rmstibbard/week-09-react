import React, { Component } from 'react';

class PasswordStrength extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    setColour() {
        let length = this.state.input.length;
        if (length == 0) {
            return { backgroundColor: '' }
        }
        if (length < 9) {
            return { backgroundColor: 'red' }
        }
        if (length < 16) {
            return { backgroundColor: 'orange' }
        }
        if (length >= 16) {
            return { backgroundColor: 'green' }
        }
    }

    render() {
        return (

            <div>
                <label>Input: </label>
                <input
                    onChange={this.handleChange}
                    value={this.state.input}
                    style={this.setColour()}
                />
            </div >

        );
    }
}

export default PasswordStrength;
