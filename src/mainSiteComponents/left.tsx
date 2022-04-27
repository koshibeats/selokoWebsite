import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import { Clothes } from './clothes';
import { parseConfigFileTextToJson } from 'typescript';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

function left() {
	return (
		<div className="App">
			
					<ul className={css.list}>
						<li className={css.listElement}>T-SHIRTS</li>
						<li className={css.listElement}>HOODIES</li>
						<li className={css.listElement}>SWEATSHIRTS</li>
						<li className={css.listElement}>HATS</li>
						<li className={css.listElement}>BAGS</li>
						<li className={css.listElement}>ACCESORIES</li>
						<li className={css.listElement}>SKATEBOARDING</li>
						<li className={css.listElement}>SHOES</li>
						<li className={css.listElement}>STICKERS</li>
						<li className={css.listElement}>HARDWARE</li>
					</ul>
			
		</div>
	);
}
export default left;
