/**
 * Dependencies
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local Imports
 */
import App from 'src/components/App';
import appStore from 'src/store';

/**
 * Code
 */
const rootComponent = <Provider store={appStore}><App /></Provider>;
const renderingArea = document.querySelector('#root');
ReactDOM.render(rootComponent, renderingArea);
