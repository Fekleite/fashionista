import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import imageTemplate from "../../assets/img_padrao.jpg";

import { handleToWithoutSpaces } from "../../utils";

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="card__seal">
        {product.on_sale ? <span>{product.discount_percentage}</span> : ""}
      </div>
      <Link
        to={`/product/${handleToWithoutSpaces(product.name)}`}
        className="card__link"
      >
        <div className="card__content">
          <div className="card__image">
            {product.image === "" ? (
              <img src={imageTemplate} alt="Produto indisponível" />
            ) : (
              <img src={product.image} alt={product.name} />
            )}
          </div>
          <div className="card__information">
            <h2>{product.name}</h2>
            <div className="card__prices">
              {product.actual_price !== product.regular_price ? (
                <>
                  <span className="card__price--sale">
                    {product.regular_price}
                  </span>
                  <span className="card__price">{product.actual_price}</span>
                </>
              ) : (
                <span className="card__price">{product.regular_price}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
