import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './styles/index.scss'

import Home from './app/components/Home'
import Trace from './app/components/Trace'

reactDom.render(
  <Router>
    <React.Fragment>
      <nav className="navbar is-primary" role="navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">Thumb</Link>
            </div>
            <div className="navbar-item">
              <Link to="/trace/">Trace</Link>
            </div>
            <div className="navbar-item">
              <Link to="/virtualized/">Virtualized</Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trace" component={Trace} />
        <Route exact path="/virtualized" component={Trace} />
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById('app')
)
