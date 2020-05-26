import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = { colour: "green", clicked: false }; // Setting initial values of 'colour' and 'clicked'
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });  // Reverses value of 'clicked' in state
    }

    render() {
        return (
            <div
                onClick={this.handleClick}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: this.state.clicked ? this.props.colour : this.state.colour
                    // If clicked = true then bgCol = colour passed in in props (pink)
                    //      otherwise bgCol = colour set in state (green)
                }}>
            </ div>
        );
    }
}

export default Square;