import React from "react";
import { FiArrowUp } from "react-icons/fi";

import "./styles.scss";

const BackTop = () => {
  function handleScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <button className="backTop" onClick={handleScroll}>
      <FiArrowUp size={16} color="#f2f2f2" />
    </button>
  );
};

export default BackTop;
