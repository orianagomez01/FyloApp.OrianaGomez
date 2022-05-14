import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const [showButton, setShowButton] = useState(false);

  const addProduct = (num) => {
    setQuantity(quantity + num);
  };

  return (
    <>
      <div className="item__quantities">
        <Button
          className="btn btn-secondary"
          onClick={() => addProduct(-1)}
          disabled={quantity === initial ? true : null}
        >
          -
        </Button>
        <p className="item__quantity">{quantity}</p>

        <Button
          className="btn btn-secondary"
          onClick={() => addProduct(+1)}
          disabled={quantity === stock ? true : null}
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
            onAdd(quantity);
            setShowButton(true);
          }}
          disabled={stock === 0 ? true : null}
        >
          Añadir al carrito
        </button>
      )}

      {/* <button
        id="{item.id}"
        className="product__btn"
        onClick={() => {
          onAdd(quantity);
          setShowButton(true);
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir al carrito
      </button>

      {showButton && (
        <Link to="/cart" id="{item.id}" className="product__btn">
          Finalizar compra
        </Link>
      )} */}
    </>
  );
};

export default ItemCount;
// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// // import { useAppContext } from "../context/AppContext";
// import CartContextProvider, { useCartContext } from "../context/CartContext";

// const ItemCount = ({ data, onAdd }) => {
//   const [count, setCount] = useState(0);

//   // const { addItem } = useCartContext();
//   // const { products } = useAppContext();

//   const handleAdd = () => {
//     if (count < data.quantity) {
//       setCount(count + 1);
//     }
//   };

//   const handleRemove = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const handleClick = (id, quantity) => {
//     const findProduct = data.find((producto) => producto.id === id);

//     if (!findProduct) {
//       alert("Error");
//       return;
//     }

//     // addItem(findProduct, quantity);
//     onAdd(count);
//   };

//   return (
//     <>
//       <div className="item__quantities">
//         <Button className="btn btn-secondary" onClick={handleRemove}>
//           -
//         </Button>
//         <p className="item__quantity">{count}</p>

//         <Button className="btn btn-secondary" onClick={handleAdd}>
//           +
//         </Button>
//       </div>

//       {/*

//       <CartContextProvider> */}
//       <button
//         id="{item.id}"
//         className="product__btn"
//         onClick={() => handleClick(data.id, count)}
//       >
//         Añadir al carrito
//       </button>
//       {/* </CartContextProvider> */}
//     </>
//   );
// };

// export default ItemCount;
