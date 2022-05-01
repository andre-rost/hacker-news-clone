import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [randomNews, setRandomNews] = useState({ hits: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState();
  const [isLoading, setLoaded] = useState(true);

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
      setLoaded(false);
      // document.getElementsByClassName("body")[0].style.display = "block";
    };
    fetchData();
  }, [query]);

  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : query}

      <div className="body">
        <Navbar />
        <div className="News-list">
          {randomNews.hits
            .filter((newsPost) => newsPost.url)
            .map((newsPost, index) => {
              return (
                <News
                  key={newsPost.objectID}
                  newsPost={newsPost}
                  index={index}
                />
              );
            })}
        </div>
        <Footer
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
