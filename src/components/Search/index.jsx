import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { connect } from "react-redux";

import "./styles.scss";

import SearchCard from "../SearchCard";

const Search = ({ handleSearch, products }) => {
  const [search, setSearch] = useState("");

  function handleChangeSearch(event) {
    const productsSearch = [];
    const busca = event.target.value;
    products.map((product, index) => {
      const c = product.name.toLowerCase();
      if (busca !== "") {
        const searching = c.includes(busca.toLowerCase());
        if (searching) {
          productsSearch.push({ ...product, id: index });
          if (productsSearch.length !== "") {
            setSearch(productsSearch);
          }
        }
        return true;
      } else {
        setSearch("");
        return false;
      }
    });
  }

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
          onChange={handleChangeSearch}
        />
      </div>
      {search === "" ? (
        <div className="search__results--loading">
          <span className="search__animation" />
        </div>
      ) : (
        <div className="search__results">
          {search.map((item, index) => (
            <SearchCard product={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Search);
