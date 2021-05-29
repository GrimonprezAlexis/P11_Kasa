import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store'
import Home from './components/Home/home'
import LogementDetail from './components/Logements/logementDetail'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={LogementDetail} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
