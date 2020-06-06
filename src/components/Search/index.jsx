import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.scss";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <header className="search__header">
        <button className="search__button" onClick={handleSearch}>
          <FiArrowLeft size={24} color="#121111" />
        </button>
        <div className="search__title">
          <h3>Buscar produtos</h3>
        </div>
      </header>
      <div className="search__form">
        <input
          type="text"
          className="search__form-input"
          placeholder="Buscar por produtos..."
        />
      </div>
      <div className="search__results--loading">
        <span className="search__animation" />
      </div>
    </div>
  );
};

export default Search;
