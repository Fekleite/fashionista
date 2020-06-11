import React from "react";
import { FiXCircle } from "react-icons/fi";

import "./styles.scss";

const ErrorAlert = () => {
  return (
    <div className="errorAlert">
      <FiXCircle size={24} color="#f2f2f2" />
      <p>Escolha um tamanho</p>
    </div>
  );
};

export default ErrorAlert;
