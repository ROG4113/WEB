import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import { useState } from "react";

function Test(){
  const [movieRating, setMovieRating]=useState(0);

  return(
    <div>
      <StarRating color="blue" maxrating={10} onSetRating={setMovieRating} maxRating={10}/>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} 
    messages={["Terrible","Bad", "Okay","Good","Amazing!"]}
    className='test'
    defaultRating={1}
    />
    <StarRating maxRating={10} size={25} color="red" />
    <Test /> */}
  </React.StrictMode>
);