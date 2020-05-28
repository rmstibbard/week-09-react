import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class CatchMe extends Component {

    constructor(props) {
        super(props);
        this.state = { top: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            top: this.state.top + this.props.jump,
        });
    }

    render() {
        return (
            <Button
                onClick={this.handleClick}
                style={
                    {
                        position: 'absolute',
                        top: this.state.top
                    }
                }
                className="catch-me">
                Catch Me If You Can!
            </Button>
        )
    }

}

export default CatchMe;