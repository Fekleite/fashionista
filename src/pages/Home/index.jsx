import React from "react";

import "./styles.scss";

import Topbar from "../../components/Topbar";
import FilterBar from "../../components/FilterBar";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <Topbar />
      <FilterBar />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
