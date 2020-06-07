import React, { useEffect } from "react";

import "./styles.scss";

import Topbar from "../../components/Topbar";
import FilterBar from "../../components/FilterBar";
import Card from "../../components/Card";

const Home = () => {
  function handleScroll() {
    let top = document.getElementById("top");
    if (document.documentElement.scrollTop > 5) {
      top.classList.add("scroll");
    } else {
      top.classList.remove("scroll");
    }
  }

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
      </div>
    </>
  );
};

export default Home;
