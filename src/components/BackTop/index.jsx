import React from "react";
import { FiArrowUp } from "react-icons/fi";

import "./styles.scss";

const BackTop = () => {
  return (
    <button className="backTop">
      <FiArrowUp size={16} color="#f2f2f2" />
    </button>
  );
};

export default BackTop;
