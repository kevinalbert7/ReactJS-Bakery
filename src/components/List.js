import React, { Component } from "react";

class List extends Component {
  render() {
    const { items, handleClick } = this.props;

    let total = [];

    for (let i = 0; i < items.length; i++) {
      total.push(Number(items[i].price));
    }

    let sum = total.reduce((a, b) => a + b, 0);

    return (
      <>
        <h2 className="mb-4">List</h2>

        <ul className="row list-group mb-3">
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className="col-8 d-flex justify-content-between list-group-item"
              >
                {item.name} - {item.price}
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleClick(item)}
                >
                  Supprimer
                </button>
              </li>
            );
          })}
        </ul>

        <p>Total : {sum}</p>
      </>
    );
  }
}

export default List;
