import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import "./styles.scss";

import Bag from "../Bag";

const Topbar = () => {
  const [showBag, setShowBag] = useState(false);

  function handleBag() {
    setShowBag(!showBag);
  }

  return (
    <>
      <header className="topbar">
        <div className="topbar__content">
          <h1>Fashionista</h1>

          <div className="topbar__buttons-container">
            <button className="topbar__button">
              <FiSearch size={24} color="#ffffff" />
            </button>

            <button className="topbar__button" onClick={handleBag}>
              <FiShoppingBag size={24} color="#ffffff" />
            </button>
          </div>
        </div>
      </header>

      {showBag && <Bag handleBag={handleBag} />}
    </>
  );
};

export default Topbar;
