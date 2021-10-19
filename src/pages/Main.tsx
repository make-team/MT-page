import React from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

import "./main.css";
import CardList from "../components/template/CardList";

function Main() {
  return (
    <div className="wrapper">
      <Header />
      <CardList></CardList>
      <Footer />
    </div>
  );
}

export default Main;
