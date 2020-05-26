import React from 'react';

const Items = ({ items }) => (
    items ? (
        <table className="mytable">
            <tr>
                <th>Item</th>
                <th>Price</th>
            </tr>
            {items.map((item, index) => (
                <tr>
                    <td> {item.name} </td>
                    <td> {" £" + item.price.toFixed(2)}</td>
                </tr>
            ))}

        </table>
    ) : <p>No items in basket</p>

);

export default Items;