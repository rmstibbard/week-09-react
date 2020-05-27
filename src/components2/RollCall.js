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
            max: names.length,
            index: (this.state.index + 1)
        });
        //let { max } = this.state.max;
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

