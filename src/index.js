import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import { rootReduser } from './redusers/rootReduser';
import { Provider } from  'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

const store = createStore(rootReduser,
        compose(
             applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
             reduxFirestore(fbConfig),
             reactReduxFirebase(fbConfig)
            )
        );

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
document.getElementById('root'));


