import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import App from './App';
import Home from './components/home'
import Welcome from './components/welcome'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Welcome} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);
