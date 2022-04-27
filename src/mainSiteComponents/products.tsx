import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import { Clothes } from "./clothes"
import { parseConfigFileTextToJson } from 'typescript';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

interface Args {
	clothes: Clothes[];
}

function products({ clothes }: Args) {
	return (
		<div className="App">
			<div className={css.middle}>
				{clothes.map((clothing) => <div className={css.product}>{clothing.type}</div>)}
			</div>
			<div className={css.decoration} />
		</div>
	);
}

export default products;
