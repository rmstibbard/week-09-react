import React from 'react';

const Items = ({ items }) => (
    items ? (
        <ul>
            {items.map((value, index) => (
                <li key="{index}">
                    {value.name + " £" + value.price}
                </li>
            ))}
        </ul>
    ) : <p>No items in basket</p>

);

export default Items;