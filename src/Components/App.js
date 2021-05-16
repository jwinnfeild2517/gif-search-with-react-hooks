import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import GifList from './GifList';


const GIF_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('the office');
  const [isLoading, setIsLoading] = useState(true)

  const perormSearch = (value) => setQuery(value)

  useEffect(() => {
    // debugger;
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${GIF_KEY}`)
    .then(response => setData(response.data.data))
    .catch(error => console.log('error fetching gif data', error))
    .finally(() => setIsLoading(false))
  }, [query])

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={perormSearch}/>
        </div>
      </div>
      <div className="main-content">
        {
          isLoading ? <p>Loading...</p> : <GifList data={data} />
        }
      </div>
    </>
  );
}

export default App

