import React from "react";
import { FiTrash2 } from "react-icons/fi";

import "./styles.scss";

const BagCard = () => {
  return (
    <div className="cardBag">
      <div className="cardBag__image">
        <img
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002945_027_catalog_1.jpg"
          alt="Imagem do produto"
        />
      </div>

      <div className="cardBag__description">
        <div className="cardBag__infos">
          <h2 className="cardBag__name">Bolsa Flap Triangle</h2>
          <div className="cardBag__prices">
            <p className="cardBag__price"></p>
            <p className="cardBag__price--installments"></p>
          </div>
          <p className="cardBag__sizes">Tamanho: U</p>
        </div>

        <div className="cardBag__controlls">
          <div className="cardBag__controlls-amount">
            <button
              className="cardBag__button"
              // onClick={(e) => handleControllAmount("-")}
            >
              {" "}
              -{" "}
            </button>
            <span>0</span>
            <button
              className="cardBag__button"
              // onClick={(e) => handleControllAmount("+")}
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
