import React, { Component } from "react";

class CatchMeIfYouCan extends Component {

    constructor(props) {
        super(props);
        this.state = { marginTop: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            marginTop: this.state.marginTop + this.props.jump,
        });
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                style={{ marginTop: this.state.marginTop }}
                className="catch-me">
                Catch Me If You Can!
            </button>
        )
    }

}

export default CatchMeIfYouCan;