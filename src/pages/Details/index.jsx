import React from "react";

import "./styles.scss";

import Topbar from "../../components/Topbar";
import Product from "../../components/Product";
import Footer from "../../components/Footer";

const Detail = () => {
  return (
    <>
      <Topbar />
      <div className="detail">
        <Product />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
