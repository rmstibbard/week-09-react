import React from 'react';

const Items = ({ items }) => (
    items ? (
        <table className="mytable">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td> {item.name} </td>
                        <td> {" £" + item.price.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : <p>No items in basket</p>

);

export default Items;