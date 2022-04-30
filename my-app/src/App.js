import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

function App() {
  const [randomNews, setRandomNews] = useState({ hits: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState();
  const [isLoading, setLoading] = useState(true);

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    const url = new URL("http://hn.algolia.com/api/v1/search_by_date");
    url.searchParams.set("tags", "story");
    query && url.searchParams.set("query", query);

    const fetchData = async () => {
      const result = await axios(url.toString());
      setRandomNews(result.data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Navbar />
      <div className="News-list">
        {randomNews.hits
          .filter((newsPost) => newsPost.url)
          .map((newsPost, index) => {
            return (
              <News key={newsPost.objectID} newsPost={newsPost} index={index} />
            );
          })}
      </div>
      <Footer
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
