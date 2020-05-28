import React, { Component } from 'react';

class Content extends Component {

    render() {
        let { children } = this.props;

        return (
            <p>{children}</p>
        );
    }

}

export default Content;