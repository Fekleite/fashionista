import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__seal">
        <span>25%</span>
      </div>
      <Link to="/product" className="card__link">
        <div className="card__content">
          <div className="card__image">
            <img
              src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002945_027_catalog_1.jpg"
              alt="Imagem do produto"
            />
          </div>
          <div className="card__information">
            <h2>Bolsa Flap Triangle</h2>
            <div className="card__prices">
              <span className="card__price--sale">R$ 199,90</span>
              <span className="card__price">R$ 159,90</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
