import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import { rootReduser } from './redusers/rootReduser';
import { Provider } from  'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReduser, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
document.getElementById('root'));


