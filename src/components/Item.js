import React from "react";

const Item = ({ products }) => {
  return (
    <div className="card__container container">
      <article className="card__item">
        <div className="card__content">
          <figure className="card__picture">
            <img
              src={require(`../assets/${products.picture}`)}
              className="card__img"
              alt="Imagen del producto"
            />
          </figure>

          <div className="card__texts">
            <h2 className="card__title">{products.title}</h2>
            <p className="card__paragraph">{products.description}</p>
            <p className="card__price">${products.price}</p>
            <button id="{products.id}" className="card__btn">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Item;
