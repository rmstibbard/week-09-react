import React from 'react';

const People = ({ names }) => (
    names ? (
        <ul onClick={() => console.log("Hello, world")}>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    ) : <p> Nothing to see here</p>

);

export default People;