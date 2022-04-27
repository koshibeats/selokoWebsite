import React from 'react';
import logo from './logo.svg';
import clothes from './mainSiteComponents/clothes.json'
import MainSite from './mainSiteComponents/mainSite'
import Left from "./mainSiteComponents/left"

import Main from "./main/main";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Main></Main>
    <Routes>
    
    <Route path="/main"  element={<MainSite clothes={clothes} />} />
    </Routes>
    </div>
    </Router>

  )
}

export default App;
