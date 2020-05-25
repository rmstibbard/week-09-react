import React from 'react';

const Paragraph = ({ children }) => (
    <p>{children ? children : "Hello world"}</p>
);

export default Paragraph;