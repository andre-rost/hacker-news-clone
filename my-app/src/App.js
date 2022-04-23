import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="News-list">
        <News />
        <News />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
