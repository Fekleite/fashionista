import React, { useEffect } from "react";

import "./styles.scss";

import Topbar from "../../components/Topbar";
import FilterBar from "../../components/FilterBar";
import Card from "../../components/Card";

import { handleScroll } from "../../utils";

const Home = () => {
  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <>
      <Topbar />
      <div className="photo">
        <a href="#cards">Conheça nossos produtos</a>
      </div>
      <FilterBar />
      <div className="cards" id="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
