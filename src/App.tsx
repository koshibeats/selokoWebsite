import React from 'react';
import logo from './logo.svg';
import clothes from './mainSiteComponents/clothes.json'
import MainSite from './mainSiteComponents/mainSite'


import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Routes>
      <MainSite></MainSite>
      </Routes>
    </div>
  );
}

export default App;
