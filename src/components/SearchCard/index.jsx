import React from "react";

import "./styles.scss";

const SearchCard = () => {
  return (
    <div className="cardSearch">
      <div className="cardSearch__image">
        <img
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002945_027_catalog_1.jpg"
          alt="Imagem do produto"
        />
      </div>

      <div className="cardSearch__infos">
        <h2 className="cardSearch__name">Bolsa Flap Triangle</h2>
        <p className="cardSearch__price">R$ 159,90</p>
      </div>
    </div>
  );
};

export default SearchCard;
