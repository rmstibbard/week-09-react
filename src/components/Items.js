import React from 'react';

const Items = ({ items }) => (
    items ? (
        <ul>
            {items.map((value, index) => (
                <li key="basket-{index}">
                    {value.name + " £" + value.price.toFixed(2)}
                </li>
            ))}
        </ul>
    ) : <p>No items in basket</p>

);

export default Items;