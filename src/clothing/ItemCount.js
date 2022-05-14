import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, data, onAdd }) => {
  const [qty, setQuantity] = useState(initial);

  const [showButton, setShowButton] = useState(false);

  const addProduct = (num) => {
    setShowButton(true);
    setQuantity(qty + num);
  };

  return (
    <>
      <div className="item__quantities">
        <Button
          className="btn btn-secondary"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </Button>
        <p className="item__quantity">{qty}</p>

        <Button
          className="btn btn-secondary"
          onClick={() => addProduct(+1)}
          disabled={qty === data.quantity ? true : null}
        >
          +
        </Button>
      </div>

      {showButton ? (
        <Link to="/cart" id="{item.id}" className="product__btn">
          Finalizar compra
        </Link>
      ) : (
        <button
          id="{item.id}"
          className="product__btn"
          onClick={() => {
            onAdd(qty);
          }}
          disabled={data.quantity === 0 ? true : null}
        >
          Añadir al carrito
        </button>
      )}
    </>
  );
};

export default ItemCount;
