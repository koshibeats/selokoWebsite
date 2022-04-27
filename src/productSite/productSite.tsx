import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';






function mainSite(){
    return (
        <div className={css.App}>
            <div className = {css.header}>
            
            
            <div className = {css.middle}>
            
           
            
                <div className = {css.product}>
                  
                  
                </div>
                </div>
          </div>
        </div>
      );
}

export default mainSite;