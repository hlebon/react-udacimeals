import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers'


//create store
const store = createStore(reducer);
console.log(store);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
