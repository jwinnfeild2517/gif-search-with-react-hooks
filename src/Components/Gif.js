import React, {} from 'react'

export const Gif = (props) => (
    <li className="gif-wrap">
    <a href={props.url} target="_blank" rel='noreferrer'>
      <img src={props.url} alt=""/>
    </a>
  </li>
)

export const GifList = props => { 
    const results = props.data;
    let gifs;
    if (results && results.length > 1) {
      gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />);    
    } else {
      gifs = <></>
    }
  
    return(
      <ul className='gif-list'>
        {gifs}
      </ul> 
    );
  }
  
  export default GifList;