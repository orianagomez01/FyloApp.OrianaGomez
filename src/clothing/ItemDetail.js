import React from "react";

const ItemDetail = (data) => {
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

            <div className="item__texts">
              <h1 className="item__title">{data.title}</h1>
              <p className="item__paragraph">{data.description}</p>
              <p className="item__price">${data.price}</p>

              <form className="item__selection">
                <div class="radiobtn">
                  <input
                    type="radio"
                    id="size-xs"
                    name="xs"
                    value="xs"
                    checked
                  />
                  <label for="huey">XS</label>
                </div>
                <div class="radiobtn">
                  <input type="radio" id="size-m" name="m" value="m" />
                  <label for="huey">M</label>
                </div>
                <div class="radiobtn">
                  <input type="radio" id="size-l" name="l" value="l" />
                  <label for="huey">L</label>
                </div>
                <div class="radiobtn">
                  <input type="radio" id="size-xl" name="xl" value="xl" />
                  <label for="huey">XL</label>
                </div>
                <div class="radiobtn">
                  <input type="radio" id="size-xxl" name="xxl" value="xxl" />
                  <label for="huey">XXL</label>
                </div>
              </form>
              <button id="{item.id}" className="card__btn">
                Añadir al carrito
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ItemDetail;
