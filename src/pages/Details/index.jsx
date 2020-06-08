import React from "react";

import "./styles.scss";

import Topbar from "../../components/Topbar";
import Product from "../../components/Product";

const Detail = () => {
  return (
    <>
      <Topbar />
      <div className="detail">
        <Product />
      </div>
    </>
  );
};

export default Detail;
