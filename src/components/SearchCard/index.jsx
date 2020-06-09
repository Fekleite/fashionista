import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const SearchCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="link">
      <div className="cardSearch">
        <div className="cardSearch__image">
          <img src={product.image} alt="Imagem do produto" />
        </div>

        <div className="cardSearch__infos">
          <h2 className="cardSearch__name">{product.name}</h2>
          <p className="cardSearch__price">{product.actual_price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
