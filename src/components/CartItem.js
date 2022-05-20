import React from "react";
import { Table } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

const CartItem = () => {
  const { removeItem, clear, cart } = useCartContext();

  return (
{cart.map ((data) => {
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Productos</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>{data.title}</td>
        <td>{data.quantity}</td>
        <td>{data.total}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
})}
  );
};

export default CartItem;
