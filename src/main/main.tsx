import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import {Clothes} from "./clothes";

import Header from './header'
import Left from './left'

import Decoration from './decoration'



function main(){
    return (
        <div className={css.App}>
            <Header></Header>
            <div className={css.wrapper}>
            <div className = {css.left}>
            <Left></Left>
            </div>
            
            <div className = {css.middle}>
            
            
              
                
            
            
            </div> 
            <Decoration></Decoration>
            </div> 
            </div> 
      )
}

export default main;