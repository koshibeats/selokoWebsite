import React from 'react';
import logo from './logo.svg';
import clothes from '../public/clothes.json';

import MainSite from './mainSite/mainSite';

function App() {
  return (
    <div className="App">
      <MainSite clothes={clothes}></MainSite>
    </div>
  );
}

export default App;
