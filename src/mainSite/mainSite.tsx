import React from 'react';
import css from './mainSite.module.scss';

function mainSite(){
    return (
        <div className="App">
            <img src = "logo.png" className = {css.logo}></img>
            <div className = {css.wrapper}>
            <div className = {css.left}>
            </div>
            <div className = {css.middle}>
            </div>
          </div>
        </div>
      );
}


export default mainSite;
