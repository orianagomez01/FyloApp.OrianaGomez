import React from "react";

const Item = ({ product }) => {
  return (
    <div className="card__container container">
      <article className="card__item">
        <div className="card__content">
          <figure className="card__picture">
            <img
              src={require(`../assets/${product.picture}`)}
              className="card__img"
              alt="Imagen del producto"
            />
          </figure>

          <div className="card__texts">
            <h2 className="card__title">{product.title}</h2>
            <p className="card__paragraph">{product.description}</p>
            <p className="card__price"> {product.price}</p>
            <button id="{product.id}" className="card__btn">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Item;
