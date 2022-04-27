import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import {Clothes} from "./clothes";


import Left from './left'
import Products from './products'

interface Args {
	clothes: Clothes[];
}



function mainSite({ clothes }: Args){
    return (
        
            <div className = {css.middle}>
             
            <Products clothes={[]}></Products>
            {clothes.map((clothing) => <div className={css.product}>{clothing.type}</div>)}
                
            
            </div>
            
        
      );
}

export default mainSite;