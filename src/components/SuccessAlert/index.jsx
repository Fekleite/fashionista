import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import "./styles.scss";

const SuccessAlert = () => {
  return (
    <div className="successAlert">
      <FiCheckCircle size={24} color="#f2f2f2" />
      <p>Adicionado à sacola</p>
    </div>
  );
};

export default SuccessAlert;
