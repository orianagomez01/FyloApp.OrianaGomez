import React from "react";
import { Button, Table } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import basuraIcono from "../assets/bxs-trash.svg";

const CartItem = () => {
  const { removeItem, cart, precioTotal, clear } = useCartContext();
  const pTotal = precioTotal();

  return (
    <div>
      {cart.map((data) => (
        <Table key={data.id} striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Productos</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{data.title}</td>
              <td>{data.quantity}</td>
              <td>${pTotal}</td>
              <td>
                <button
                  onClick={() => removeItem(data.id)}
                  className="modal__icon"
                  id={data.id}
                >
                  <img
                    className="modal__icon--img"
                    src={basuraIcono}
                    alt="Icono de tacho de basura"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      <div className="text-center">
        <Button onClick={() => clear()} variant="success">
          Borrar Todo
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
