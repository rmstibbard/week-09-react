import React, { Component } from "react";

class RollCall extends Component {

    constructor(props) {
        super(props);
        this.state = { index: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { names } = this.props;
        this.setState({
            index: (this.state.index + 1) % names.length /* Works as reset because:
                                                            / 1 % 1 = 0 (index = 0)
                                                              1 % 2 = 1 (etc...)
                                                              1 % 6 = 0 ... start loop again
                                                            */
        });
    }

    render() {

        let { index } = this.state;
        let { names } = this.props;

        return (
            <>
                <button onClick={this.handleClick}>Next</button >
                <p>{names[index]}</p>
            </>
        )
    }

}

export default RollCall;

