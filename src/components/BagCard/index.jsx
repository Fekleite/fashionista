import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";

import "./styles.scss";

import { deleteProductBag } from "../../store/actions/actions";

const BagCard = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  function handleDecrement() {
    setAmount(amount - 1);
  }

  function handleIncrement() {
    setAmount(amount + 1);
  }

  function handleButtonTrash(id) {
    dispatch(deleteProductBag(id));
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
            <p className="cardBag__price">{product.actual_price}</p>
            <p className="cardBag__price--installments">
              {product.installments}
            </p>
          </div>
          <p className="cardBag__sizes">Tamanho: {product.size}</p>
        </div>

        <div className="cardBag__controlls">
          <div className="cardBag__controlls-amount">
            <button className="cardBag__button" onClick={handleDecrement}>
              {" "}
              -{" "}
            </button>
            <span> {amount} </span>
            <button className="cardBag__button" onClick={handleIncrement}>
              {" "}
              +{" "}
            </button>
          </div>
          <div className="cardBag__controlls-trash">
            <button
              className="cardBag__button--trash"
              onClick={() => handleButtonTrash(product.id)}
            >
              <FiTrash2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
