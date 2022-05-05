import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productListMen } from "../data/dataProductMen";

const ItemDetail = () => {
  const { ItemId } = useParams();
  const [Item, setItem] = useState({});

  useEffect(() => {
    (async () => {
      const itemData = await getClothesDetail();
      if (itemData) {
        setItem(itemData);
      }
    })();
  }, [ItemId]);

  const getClothesDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productListMen.find((r) => r.id === ItemId));
      }, 1000);
    });
  };

  return (
    <>
      <div className="item__container">
        <article className="item">
          <div className="item__content">
            <figure className="item__picture">
              <img
                src={require(`../assets/${Item.picture}`)}
                className="item__img"
                alt="Imagen del producto"
              />
            </figure>

            <div className="item__texts">
              <h2 className="item__title">{Item.title}</h2>
              <p className="item__paragraph">{Item.description}</p>
              <p className="item__price">${Item.price}</p>

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
              <button id="{data.id}" className="card__btn">
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
