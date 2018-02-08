import 'babel-polyfill';
import React       from 'react';
import ReactDOM    from 'react-dom';

import App         from './App.jsx';
import utils       from './utils/utils.jsx';


utils.loadGoogleFont();


class Widget {

	constructor(props) {
		if (utils.isObject(props)) {
			this._element = (typeof props.element === 'string') ? document.getElementById(props.element) : props.element;
		}

		this.app = null;
	}

	render(callback) {
		const $widget = this._element;

		this.app = ReactDOM.render(<App/>, $widget);
	}

	/**
	 * Метод уничтожает виджет
	 */
	destroy() {
		const $widget = this._element;

		ReactDOM.unmountComponentAtNode($widget);
	}
}

window.Widget = Widget;


if (document.body && document.readyState === 'complete') {
	initialize();
} else {
	window.addEventListener('DOMContentLoaded', initialize, false);
}

function initialize() {
	const $defaultWidget = document.getElementById('demo-widget');

	if ($defaultWidget) {
		ReactDOM.render(<App/>, $defaultWidget);
	}
}


