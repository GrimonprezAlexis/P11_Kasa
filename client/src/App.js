import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store'
import Home from './components/Home/home'
import About from './components/About/about'
import LogementDetail from './components/Logements/logementDetail'
import error404 from './components/Error/404'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/logements/:id" component={LogementDetail} />
            <Route exact path="/error404" component={error404} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
