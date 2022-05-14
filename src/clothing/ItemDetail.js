import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import ItemCount from "./ItemCount";

const ItemDetail = (data) => {
  const cartContext = useContext(CartContext);
  const { addItem } = CartContext;

  const onAdd = (quantity) => {
    addItem(data, quantity);
  };

  return (
    <>
      <div className="item__container">
        <article className="item">
          <div className="item__content">
            <figure className="item__picture">
              <img
                src={require(`../assets/${data.picture}`)}
                className="item__img"
                alt={`${data.id}-${data.title}`}
              />
            </figure>
          </div>

          <div className="item__texts">
            <h1 className="item__title">{data.title}</h1>
            <p className="item__paragraph">{data.description}</p>
            <p className="item__price">${data.price}</p>
            <p className="item__size">Talle</p>
            <div className="item__sizes">
              <ToggleButton variant="outline-secondary">XS</ToggleButton>
              <ToggleButton variant="outline-secondary">M</ToggleButton>
              <ToggleButton variant="outline-secondary">L</ToggleButton>
              <ToggleButton variant="outline-secondary">XL</ToggleButton>
              <ToggleButton variant="outline-secondary">XXL</ToggleButton>
            </div>

            <ItemCount
              stock={data.quantity}
              initial={1}
              onAdd={onAdd}
            ></ItemCount>

            {/* // const onAdd = (count) => {
  //   setTerminar(true);
  //   console.log(count);
  // }; */}

            {/* {terminar ? (
              <Link to="/cart" id="{item.id}" className="product__btn">
                Finalizar compra
              </Link>
            ) : (
              <ItemCount
                data={data.quantity}
                onAdd={onAdd}
                id={data.id}
              ></ItemCount>
            )} */}
          </div>
        </article>
      </div>
    </>
  );
};

export default ItemDetail;
