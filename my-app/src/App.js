import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ol className="News-list">
        <News />
      </ol>
      <Footer />
    </div>
  );
}

export default App;
