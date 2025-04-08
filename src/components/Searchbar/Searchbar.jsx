// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=

import React from 'react';
import './Searchbar.css';

/* pass setCafeDatas as props ({setCafeDatas} = props.setCafedatas,{destruction:分割代入}) */
function Searchbar({setCafeDatas}) {
  const getCafes = (event) => {
    console.log("Getting cafes...");
    // set value for input keyword\
    const keyword = event.currentTarget.value;
    console.log(keyword);
    // fetch the url created by rails (backend)
    const url = `https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=${keyword}`;

    fetch(url)
      .then(response =>response.json())
      .then((data) => {
        console.log(data);
        // set data(value) into cafeDatas(variable) using setCafeDatas(function)
        setCafeDatas(data);
      });
  };

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
       {/* listen the event searchbar onChange(type) */}
      <input onChange={getCafes} placeholder="Starbucks" type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;
