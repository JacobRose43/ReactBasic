import React from 'react';
import ReactDOM from 'react-dom';
import { OutlinedButtons, NormalButtons } from './navbar';

ReactDOM.render(
	<div class='container vh-100 vw-100 d-flex justify-content-center align-items-center'>
		<OutlinedButtons />
		<NormalButtons />
	</div>,
	document.getElementById('root')
);
