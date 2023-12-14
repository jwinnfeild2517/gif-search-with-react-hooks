import React, { useState, useEffect, useCallback } from "react";
import GifList from "./Components/GifList.js";
import SearchForm from "./Components/SearchForm.js";
import './App.css'

const GIF_KEY = process.env.REACT_APP_API_KEY

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("the office");
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  const getData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${GIF_KEY}`
      );
      const resj = await res.json()

      setData(resj.data);
    } catch (error) {
      console.log("error fetching gif data", error);
    }
    setIsLoading(false)
  }, [query]);

  useEffect(() => {
    getData()
  }, [query, getData])

  return <>
  <div className="main-header">
    <div className="inner">
      <h1 className="main-title">GifSearch</h1>
      <SearchForm onSearch={performSearch}/>
    </div>
  </div>
  <div className="main-content">
    {
      isLoading ? <p>Loading...</p> : <GifList data={data} />
    }
  </div>
</>;
};

export default App;
