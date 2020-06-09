import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { connect } from "react-redux";

import "./styles.scss";

import Bag from "../Bag";
import Search from "../Search";

const Topbar = ({ productsBag }) => {
  const [showBag, setShowBag] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const productsLength = productsBag.length;

  function handleBag() {
    setShowBag(!showBag);
  }

  function handleSearch() {
    setShowSearch(!showSearch);
  }

  return (
    <>
      <header className="topbar" id="top">
        <div className="topbar__content">
          <h1>Fashionista</h1>

          <div className="topbar__buttons-container">
            <button className="topbar__button">
              <FiSearch size={24} color="#ffffff" onClick={handleSearch} />
            </button>

            <button className="topbar__button" onClick={handleBag}>
              <FiShoppingBag size={24} color="#ffffff" />
            </button>
            {productsLength ? <span className="topbar__span"></span> : ""}
          </div>
        </div>
      </header>

      {showBag && <Bag handleBag={handleBag} />}
      {showSearch && <Search handleSearch={handleSearch} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  productsBag: state.productsBag,
});

export default connect(mapStateToProps)(Topbar);
