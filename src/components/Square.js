import React from 'react';

const boxStyle = {
    backgroundColor: "red",
    width: 200,
    height: 200
};

const Square = ({ display }) => (
    display === "true" ? (<div style={boxStyle}></div>) : ''
);

Square.defaultProps = {
    display: "true"
};

export default Square;