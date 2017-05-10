import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { tlwStore } from './tlwStore';
import { addLanguage, changeLanguage } from './tlwActionCreators';
import App from './components/App/App';

import './index.css';

tlwStore.dispatch(addLanguage(1, 'EN', 'English', require('./languages/en'), 'ltr'));
tlwStore.dispatch(addLanguage(2, 'עב', 'עברית', require('./languages/he'), 'rtl'));
tlwStore.dispatch(changeLanguage(1));

ReactDOM.render((
    <Provider store={tlwStore}>
        <App />
    </Provider>
), document.getElementById('app'));