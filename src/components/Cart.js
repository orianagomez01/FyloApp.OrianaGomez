import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { removeItem, clear, cart } = useCartContext();

  //  const cartPrint = cart.map((item) => {
  //    function onSubstract() {
  //      removeItem(item.id);
  //    }
  //  });

  if (cart.length === 0) {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Carrito de compras</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <div className="modal__texts">
            <p className="modal__paragraph">No hay productos seleccionados</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Link to={`/`}>
            <Button variant="primary">Volver al inicio</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    );
  } else {
    <section id="carrito">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Carrito de compras</Modal.Title>
        </Modal.Header>
        {cart.map((data) => {
          return (
            // <>
            <div key={data.id}>
              <Modal.Body className="modal-body">
                <img
                  className="modal__img"
                  src={require(`../assets/${data.picture}`)}
                  alt="Imagen del producto seleccionado"
                />
                <div className="modal__texts">
                  <h3 className="modal__title"> {data.title}</h3>
                  <p className="modal__paragraph">
                    ${data.price} X ${data.quantity}{" "}
                    {/* <span className="modal__paragraph--bold">
                  {" "}
                  $${producto.subTotal()}
                </span>{" "} */}
                  </p>
                </div>
                <button
                  onClick={() => removeItem()}
                  className="modal__icon"
                  id={data.id}
                >
                  <img
                    className="modal__icon--img"
                    src={`../assets/bxs-trash.svg`}
                    alt="Icono de tacho de basura"
                  />
                </button>
              </Modal.Body>
              <Modal.Footer>
                <p id="totalCarrito">Total: ${data.quantity * data.price}</p>
                <Button onClick={() => clear()} variant="secondary">
                  Vaciar Carrito
                </Button>
                <Button variant="primary">Confirmar</Button>
              </Modal.Footer>
            </div>

            // </>
          );
        })}
      </Modal.Dialog>
    </section>;
  }
};

export default Cart;
