import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import news from "./response.json";
import { useState, setState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="News-list">
        {/* <News />
        <News />
        <News /> */}
        {/* {console.log(news.hits)} */}
        {news.hits.map((newsPost, index) => {
          return <News key={newsPost.objectID} newsPost={newsPost} index={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
