import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';

function mainSite(){
    return (
        <div className={css.App}>
            <div className = {css.header}>
            <img src = "logo.png" className = {css.logo}></img>
            </div>
            <div className = {css.wrapper}>
            <div className = {css.left}>
            <ul className = {css.list}>
            <li className = {css.listElement}>T-SHIRTS</li>
            <li className = {css.listElement}>HOODIES</li>
            <li className = {css.listElement}>SWEATSHIRTS</li>
            <li className = {css.listElement}>HATS</li>
            <li className = {css.listElement}>BAGS</li>
            <li className = {css.listElement}>ACCESORIES</li>
            <li className = {css.listElement}>HARDWARE</li>
            </ul>
            </div>
            
            
            <div className = {css.middle}>
            
            </div>
            <div className = {css.decoration}>
            <img src = "snake.png" className = {css.right} ></img>
              </div>
          </div>
        </div>
      );
}


export default mainSite;
