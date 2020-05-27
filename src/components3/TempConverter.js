import React, { Component } from 'react';

class TempConverter extends Component {
    constructor(props) {
        super(props);
        this.state = { inputC: "", inputF: "" };
        this.handleChangeF = this.handleChangeF.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
    }

    handleChangeF(e) {
        this.setState({
            inputF: e.currentTarget.value, inputC: ((e.currentTarget.value - 32) * (5 / 9)).toFixed(3)
        });
    }

    handleChangeC(e) {
        this.setState({
            inputC: e.currentTarget.value, inputF: ((e.currentTarget.value * (9 / 5)) + 32).toFixed(3)
        });
    }

    render() {
        return (

            <div>
                <h2>Temperature Converter</h2>

                <label>Fahrenheit: </label>

                <input
                    value={this.state.inputF}
                    onChange={this.handleChangeF} /><br />

                <label>Celsius: </label>

                <input
                    value={this.state.inputC}
                    onChange={this.handleChangeC} />
            </div>

        )
    }

}

export default TempConverter;