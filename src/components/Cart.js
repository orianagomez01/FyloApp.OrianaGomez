import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { removeItem, clear, cart } = useCartContext();

  const cartPrint = cart.map((item) => {
    function onSubstract() {
      removeItem(item.id);
    }

    // const total = data.quantity * data.price;

    if (cart.length === 0) {
      return (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title className="modal-header">
              Carrito de compras
            </Modal.Title>
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
      return (
        <>
          <section id="carrito">
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title className="modal-header">
                  Carrito de compras
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                {cart.map((data) => {
                  return (
                    <>
                      <div key={data.id}>
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
                        <a href="#" className="modal__icon" id="${data.id}">
                          <img
                            className="modal__icon--img"
                            src={require(`../assets/bxs-trash.svg`)}
                            alt="Icono de tacho de basura"
                          />
                        </a>
                      </div>
                    </>
                  );
                })}
              </Modal.Body>

              <Modal.Footer>
                <p id="totalCarrito">Total: $</p>
                <Button variant="secondary">Cerrar</Button>
                <Button variant="primary">Confirmar</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </section>
        </>
      );
    }
  });
};

// {
//   /* <div
//           className="modal fade"
//           id="staticBackdrop"
//           data-bs-backdrop="static"
//           data-bs-keyboard="false"
//           tabindex="-1"
//           aria-labelledby="staticBackdropLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//             <div className="modal-content">
//               <div className="modal-header" id="modal__header">
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div id="productosCarrito" className="modal-body"></div>
//               <div className="modal-footer">
//                 <p id="totalCarrito"></p>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                 >
//                   Cerrar
//                 </button>
//                 <button type="button" className="btn btn-success" id="confirmar">
//                   Confirmar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> */

export default Cart;
