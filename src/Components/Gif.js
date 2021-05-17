import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <a href={props.url} target="_blank">
      <img src={props.url} alt=""/>
    </a>
  </li>
);

export default Gif;