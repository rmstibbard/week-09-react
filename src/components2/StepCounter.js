import React, { Component } from "react";

class StepCounter extends Component {

    constructor(props) {
        super(props);
        this.state = { result: 0 };
        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    countUp() {
        const { step, max } = this.props;
        const { result } = this.state;
        this.setState({
            result: result >= max ? max : result + step
        });
    }

    countDown() {
        const { step, max } = this.props;
        const { result } = this.state;
        this.setState({
            result: result <= 0 ? 0 : result - step
        });
    }

    render() {
        return (
            <>
                <p>{this.state.result}</p>
                <button onClick={this.countUp}>+</button>
                <button onClick={this.countDown}>-</button>
            </>
        )
    }


}

export default StepCounter;