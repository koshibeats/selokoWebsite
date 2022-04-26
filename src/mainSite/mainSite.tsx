import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import {Clothes} from "./clothes";
import { parseConfigFileTextToJson } from 'typescript';



interface Args {
  clothes : Clothes[];
}



function mainSite({clothes} : Args){
    return (
        <div className={css.App}>
            <div className = {css.header}>
            <img className = "logo" src="logo.png"></img>
            
            
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
            <li className = {css.listElement}>SKATEBOARDING</li>
            <li className = {css.listElement}>SHOES</li>
            <li className = {css.listElement}>STICKERS</li>
            <li className = {css.listElement}>HARDWARE</li>

            </ul>
            </div>
            
            
            <div className = {css.middle}>
            
              
                {clothes.map((clothing) => (

                <div className = {css.product}>
                  {clothing.type}
                  
                  
                </div>
                
                ))}
            
            </div>
            <div className = {css.decoration}>
            
              </div>
          </div>
        </div>
      );
}

export default mainSite;