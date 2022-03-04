import React from 'react';
import css from './mainSite.module.scss';

function mainSite(){
    return (
        <div className={css.App}>
            <div className = {css.header}>
            <img src = "logo.png" className = {css.logo}></img>
            </div>
            <div className = {css.wrapper}>
              
            
            
            <div className = {css.middle}>
            
            </div>
          </div>
        </div>
      );
}


export default mainSite;
