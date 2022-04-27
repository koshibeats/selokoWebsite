import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import {Clothes} from "./clothes";

import Header from './header'
import Left from './left'
import Products from './products'
import Decoration from './decoration'



function mainSite(){
    return (
        <div className={css.App}>
            <div className = {css.header}>
            <Header></Header>
            
            
            </div>
            <div className = {css.wrapper}>
            <div className = {css.left}>
            <Left></Left>
            
            </div>
            
            
            <div className = {css.middle}>
            <Products clothes={[]}></Products>
              
                
            
            </div>
            <div className = {css.decoration}>
            <Decoration></Decoration>
              </div>
          </div>
        </div>
      );
}

export default mainSite;