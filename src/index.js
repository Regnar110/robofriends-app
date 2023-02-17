import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'; // metoda słuząca do stworzenia STORE
// zaleca się używanie configureStore z reduxToolkit - dlatego jest przekreślone
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
//redux-logger to narzędzie ułatwiajace debuggowanie reduxa.
// JEst to middleware, które jest odpalane pomiędzy akcją a reducerem

import thunk  from 'redux-thunk';
//redux-thunk pozwala na wykonywanie asynchronicznych akcji w reduxie. Np
// do fetchowania robotów w tej palikacji. Jest to Middleware

import 'tachyons';
import './index.scss';
import App from './containers/App.js'

const rootReducer = combineReducers({searchRobots, requestRobots})
const logger = createLogger()

//loggera będziemy używać przez użycie metody reduxa applyMiddleware
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
//rootreducer to jeden wielki reducer gdzie wszystkie mniejsze reducery są połączone
// na ten moment mamy jako root reducer searchRobots reducer.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App/>
      </Provider>
    </div>
  </React.StrictMode>
);

//PROVIDER pozwala na otoczenie nim naszej aplikacji. Komponent ten zapewnia
// dostęp do store dla każdego elementu aplikacji (komponentu) bez konieczności
// przekazywania go w dół po kolei do każdego komponentu


//REDUX THUNK-
// TEN middleware sprawdza czy jakaś z akcji w create store nie zwraca obiektu
// tylko funkcje. Jak np. RequestRobots
//Jeżeli jakaś akcja przejdzie przez thunk middleware to on zadziała