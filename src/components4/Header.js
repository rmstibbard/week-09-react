import React, { Component } from 'react';

class Header extends Component {

    render() {
        let { children } = this.props;
        console.log(this.state);
        return (
            <h1>{children}</h1>
        );
    }

}

export default Header;