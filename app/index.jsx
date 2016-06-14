/////////////////////////////////////////////////
// Matt's single page app that was written in: //
//          ______                _            //
//         | ___ \              | |            //
//         | |_/ /___  __ _  ___| |_           //
//         |    // _ \/ _` |/ __| __|          //
//         | |\ \  __/ (_| | (__| |_           //
//         \_| \_\___|\__,_|\___|\__|.         //
//                                             //
//                        You should hire him. //
/////////////////////////////////////////////////

import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
// import { createStore, combineReducers }  from 'redux';
import { createStore }  from 'redux';
import todoReducer      from './src/TodoApp/reducers/todoReducer';
// import NavbarSelection      from './src/Navbar/reducers/NavbarSelection'
import App              from './src/App';

import './styles/main.sass';

// let store = createStore(combineReducers({
//   NavbarSelection,
//   todoReducer
// }));

let store = createStore(todoReducer);

// import { setNavbarLink } from './src/Navbar/actions/NavbarActions'
//
// // Log the initial state
console.log('store.getState()')
console.log(store.getState())
//
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// // Dispatch some actions
// store.dispatch(setNavbarLink('1 - /HOME'))
// store.dispatch(setNavbarLink('3 - /ABOUT'))
// store.dispatch(setNavbarLink('2 - /TODO'))
//
// // Stop listening to state updates
// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
