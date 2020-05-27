import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ value: value });
    }

    handleAdd(e) {
        e.preventDefault();

        this.setState({
            value: "",
            items: [...this.state.items, this.state.value], // Spread operator adds previous contents to array
        });
    }

    render() {

        return (
            <form onSubmit={this.handleAdd}>
                <h2>Add to List</h2>
                <input onChange={this.handleChange} />
                <button>Add</button>
                <ul>
                    {this.state.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </form>
        );

    }

}

export default List;