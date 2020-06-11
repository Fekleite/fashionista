import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

import "./styles.scss";

import Bag from "../Bag";
import Search from "../Search";

const Topbar = () => {
  const bag = useSelector((state) => state.productsBag);
  const bagSize = bag.length;

  const [showBag, setShowBag] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
            {bagSize ? <span className="topbar__span"></span> : ""}
          </div>
        </div>
      </header>

      {showBag && <Bag handleBag={handleBag} />}
      {showSearch && <Search handleSearch={handleSearch} />}
    </>
  );
};

export default Topbar;
