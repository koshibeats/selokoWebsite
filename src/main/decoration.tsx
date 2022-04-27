import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import css from './mainSite.module.scss';
import { Clothes } from './clothes';
import { parseConfigFileTextToJson } from 'typescript';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

function decoration() {
	return (
		
			<div className={css.decoration} />
		
	);
}

export default decoration;