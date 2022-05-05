import React from "react";
import { Link } from "react-router-dom";

// es la visualizacion del item

const ItemCard = ({ data }) => {
  return (
    <>
      <div className="card__container container">
        <article className="card__item">
          <div className="card__content">
            <figure className="card__picture">
              <img
                src={require(`../assets/${data.picture}`)}
                className="card__img"
                alt="Imagen del producto"
              />
            </figure>

            <div className="card__texts">
              <h2 className="card__title">{data.title}</h2>
              <p className="card__paragraph">{data.description}</p>
              <p className="card__price">${data.price}</p>
              <Link to="/clothing/:ItemId">
                <button id="{data.id}" className="card__btn">
                  Ver producto{" "}
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ItemCard;
