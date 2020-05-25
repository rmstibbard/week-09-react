import React from 'react';

const Square = ({ display }) => (
    display === "true" ?
        (
            <div style={{
                backgroundColor: "red",
                width: "200px",
                height: "200px"
            }} />
        ) : ''
);

Square.defaultProps = {
    display: "true"
};

export default Square;