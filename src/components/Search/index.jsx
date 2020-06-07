import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.scss";

import SearchCard from "../SearchCard";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="search">
      <header className="search__header">
        <button className="search__button" onClick={handleSearch}>
          <FiArrowLeft size={24} color="#f2f2f2" />
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
      {search === "" ? (
        <div className="search__results--loading">
          <span className="search__animation" />
        </div>
      ) : (
        <div className="search__results">
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </div>
      )}
    </div>
  );
};

export default Search;
