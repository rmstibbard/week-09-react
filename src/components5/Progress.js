import React, { Component } from 'react';
import { Button, ProgressBar } from "react-bootstrap";

const progressStyle = {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: '75%'
}

class Progress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { value } = this.state;

        this.setState({
            value: value < 100 ? value + 10 : value,
        });
    }

    render() {
        let value = this.state.value;

        return (
            <>
                <Button
                    disabled={value === 100}
                    onClick={this.handleClick}>
                    Button
                </Button>
                <ProgressBar style={progressStyle} now={value} label={`${value}%`} />
            </>
        );

    }

}

export default Progress;