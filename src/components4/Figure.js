import React, { Component } from 'react';

const style = { height: 700, width: 700 };

class Figure extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        let { caption, src } = this.props;

        return (
            <figure>
                <img
                    style={style}
                    className="card-img-top"
                    alt={caption}
                    src={src}
                />
                <figcaption>{caption}</figcaption>
            </figure>
        );
    }

}

export default Figure;