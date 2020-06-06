import React from "react";

import "./styles.scss";

const Product = () => {
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__image">
          <img
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002945_027_catalog_1.jpg"
            alt="Imagem do produto"
          />
        </div>
        <div className="product__information">
          <h2>Bolsa Flap Triangle</h2>
          <p>Cor: CARAMELO</p>
          <div className="product__prices">
            <div className="product__prices--row">
              <span className="product__price--sale">R$ 199,90</span>
              <span className="product__price">R$ 159,90</span>
            </div>
            <span className="product__price--installments">3x R$ 53,30</span>
          </div>
          <p>Escolha um tamanho:</p>
          <div className="product__sizes">
            <button className="product__button--size">U</button>
            <button className="product__button--size">U</button>
          </div>
          <button className="product__button">Adcionar à sacola</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
