import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import "./styles.scss";

const BagCard = ({ product }) => {
  const [amount, setAmount] = useState(1);

  function handleControllAmount(op) {
    op === "+" ? setAmount(amount + 1) : setAmount(amount - 1);
  }

  return (
    <div className="cardBag">
      <div className="cardBag__image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="cardBag__description">
        <div className="cardBag__infos">
          <h2 className="cardBag__name">{product.name}</h2>
          <div className="cardBag__prices">
            <p className="cardBag__price">{product.price}</p>
            <p className="cardBag__price--installments">
              {product.installments}
            </p>
          </div>
          <p className="cardBag__sizes">Tamanho: {product.size}</p>
        </div>

        <div className="cardBag__controlls">
          <div className="cardBag__controlls-amount">
            <button
              className="cardBag__button"
              onClick={(e) => handleControllAmount("-")}
            >
              {" "}
              -{" "}
            </button>
            <span> {amount} </span>
            <button
              className="cardBag__button"
              onClick={(e) => handleControllAmount("+")}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="cardBag__controlls-trash">
            <button className="cardBag__button--trash">
              <FiTrash2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
