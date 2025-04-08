import './App.css';
import Navbar from './components/Navbar';
import CafeList from './components/CafeList/CafeList';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';


const App =()=>{
  // useState syntax -> const [nameOfVariable, setNameOfVariable(function to modify the variabe)] = useState()
  // use a function setCafeDatas to modify a variable cafeDatas
  // IS SAME AS
  // const cafeDatasState = useState([...])
  // const cafeDatas = cafeDatasState[0]
  // const setCafeDatas =cafeDatasState[1]

  const [cafeDatas, setCafeDatas] = useState([
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
        "title": "DDSK SAIGON KITCHEN",
        "address": "ss, 135-0061, Tokyo",
        "criteria": []
    },
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/common/common--tokyo.jpg",
        "title": "COMMON",
        "address": "106-0032, Tokyo",
        "criteria": [
            "Stable Wi-Fi",
            "Power sockets",
            "Quiet",
            "Coffee",
            "Food"
        ]
    },
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/brooklyn-parlor-shinjuku/brooklyn-parlor-shinjuku%20shinjuku-city%20brooklyn-parlor-shinjuku-shinjuku-city%20.jpg",
        "title": "BROOKLYN PARLOR SHINJUKU",
        "address": "Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022, Tokyo",
        "criteria": [
            "Stable Wi-Fi",
            "Power sockets",
            "Quiet",
            "Coffee",
            "Food"
        ]
    }
  ]);

  const getCafes = () =>{
    console.log("Getting cafes...");

    // fetch the url created by rails (backend)
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";

    fetch(url)
      .then(response =>response.json())
      .then((data) => {
        console.log(data);
        // set data(value) into cafeDatas(variable) using setCafeDatas(function)
        setCafeDatas(data);
        console.log(cafeDatas);
      });
  };


  return(
    <div className="app-frame">
      <Navbar/>
      {/*to call function: onClick={nameOfFunction} */}
      <button onClick={getCafes}>
        Get All Cafes!
      </button>
      <div className="app-body">
        <Sidebar/>
        <CafeList cafeDatas={cafeDatas}/>
      </div>
    </div>
  );
};

export default App;
