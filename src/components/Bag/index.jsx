import React, { useState, useEffect } from "react";
import { FiFrown, FiArrowLeft } from "react-icons/fi";
import { connect } from "react-redux";

import "./styles.scss";

import BagCard from "../BagCard";

const Bag = ({ handleBag, productsBag }) => {
  const [bag, setBag] = useState(0);

  const length = localStorage.length;

  useEffect(() => {
    setBag(length);
  }, [length]);

  return (
    <div className="bag">
      <header className="bag__header">
        <div className="bag__header-group">
          <button className="bag__button" onClick={handleBag}>
            <FiArrowLeft size={24} color="#f2f2f2" />
          </button>

          <div className="bag__title">
            <h3>Sacola</h3>
          </div>
        </div>
      </header>

      {bag === 0 ? (
        <div className="bag__products--empty">
          <p>Sua sacola está vazia</p>
          <FiFrown size={20} color="#393939" />
        </div>
      ) : (
        <div className="bag__products">
          {productsBag.map((product, index) => (
            <BagCard product={product} key={index} />
          ))}
        </div>
      )}

      <footer className="bag__footer">
        <h3>Subtotal: R$</h3>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsBag: state.productsBag,
});

export default connect(mapStateToProps)(Bag);
