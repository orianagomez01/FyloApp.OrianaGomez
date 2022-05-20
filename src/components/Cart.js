import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cart } = useCartContext();

  //   if (itemsInCart.length === 0) {
  //     return (
  //         <div className="flex-auto justify-center mx-auto">
  //             <h2 className="flex justify-center flex-auto mt-4 text-2xl font-bold text-gray-600">
  //                 No hay productos en su carrito, pero...
  //             </h2>
  //             <img alt="dinero" src="dinero.png" className="mx-auto mt-10" />
  //             <Link to="../catalogo/todo">
  //                 <div className="flex justify-center mt-10">
  //                     <button className="inline-flex items-center border-0 py-1 px-3 mx-1 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold ">
  //                         Ir al catálogo
  //                     </button>
  //                 </div>
  //             </Link>
  //         </div>
  //     );
  // } else {
  //     return (
  //         <div>
  //             {/* Detalle de cada producto agregado */}
  //             <div>
  //                 {cart.map((item) => {
  //                     return <CartItem key={item.id} item={item}></CartItem>;
  //                 })}
  //             </div>

  //             {/* Totalizados */}
  //             <div className="flex flex-col flex-auto ">
  //                 <h3 className="flex justify-center text-blue-700 text-s font-medium">
  //                     Productos en el carrito: {contarItems()}
  //                 </h3>
  //                 <h3 className="flex justify-center text-blue-700 text-s font-medium">
  //                     Precio total del carrito: AR$ {precioTotal()}
  //                 </h3>
  //             </div>

  //             {/* Botones */}
  //             <div className=" flex flex-wrap justify-center mt-6 mb-20">
  //                 <Link to="../pago">
  //                     <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold animate-bounce">
  //                         Ir a pagar
  //                     </button>
  //                 </Link>
  //                 <button onClick={vaciarCarrito} className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
  //                     Vaciar carrito
  //                 </button>
  //                 <Link to="../catalogo/todo">
  //                     <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
  //                         Seguir comprando
  //                     </button>
  //                 </Link>
  //             </div>
  //         </div>
  //     );
  // }
  // };

  return (
    <>
      {cart.length === 0 ? (
        <div class="text-center">
          <p>No hay productos seleccionados</p>
          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      ) : (
        // <h1>aaaaaaaaaa</h1>
        <>
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </div>
        </>
      )}
    </>
  );
};

{
  /* //   return (
  //     <Modal.Dialog>
  //       <Modal.Header closeButton>
  //         <Modal.Title className="modal-header">Carrito de compras</Modal.Title>
  //       </Modal.Header>

  //       <Modal.Body className="modal-body">
  //         <div className="modal__texts">
  //           <p className="modal__paragraph">No hay productos seleccionados</p>
  //         </div>
  //       </Modal.Body>

  //       <Modal.Footer>
  //         <Link to={`/`}>
  //           <Button variant="primary">Volver al inicio</Button>
  //         </Link>
  //       </Modal.Footer>
  //     </Modal.Dialog>
  //   );
  // } else { */
}

export default Cart;
