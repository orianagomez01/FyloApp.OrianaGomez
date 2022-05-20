import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <>
      <div className="product__container container-page">
        <article className="product__item">
          <div className="product__content">
            <figure className="product__picture">
              <img
                src={require(`../assets/${products.picture}`)}
                className="product__img"
                alt="Imagen del producto"
              />
            </figure>
            <div className="product__texts">
              <h2 className="product__title">{products.title}</h2>
              <p className="product__paragraph">{products.description}</p>
              <p className="product__price">${products.price}</p>
            </div>{" "}
            <div className="product__buttons container">
              <Link to={`/items/${products.id}`}>
                <button id="{products.id}" className="product__btn">
                  Ver producto
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Item;
