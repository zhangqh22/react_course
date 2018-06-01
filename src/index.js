import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));

registerServiceWorker();