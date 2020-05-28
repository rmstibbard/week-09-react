import React, { Component } from 'react';
import { Form, FormGroup } from "react-bootstrap";


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

            <Form>
                <FormGroup>
                    <Form.Label>Fahrenheit:</Form.Label>
                    <Form.Control
                        custom="true"
                        inline="true"
                        onChange={this.handleChangeF}
                        value={this.state.inputF}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Celsius:</Form.Label>
                    <Form.Control
                        custom="true"
                        inline="true"
                        onChange={this.handleChangeF}
                        value={this.state.inputC}
                    />
                </FormGroup>
            </Form >

        )
    }

}

export default TempConverter;