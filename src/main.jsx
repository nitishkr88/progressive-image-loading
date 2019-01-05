import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './styles/index.scss'

import Thumb from './app/components/Thumb'
import Trace from './app/components/Trace'
import Virtualized from './app/components/Virtualized'
import Basic from './app/components/Basic'

reactDom.render(
  <Router>
    <React.Fragment>
      <nav className="navbar is-primary" role="navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">Basic</Link>
            </div>
            <div className="navbar-item">
              <Link to="/thumb">Thumb</Link>
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
        <Route exact path="/" component={Basic} />
        <Route exact path="/thumb" component={Thumb} />
        <Route exact path="/trace" component={Trace} />
        <Route exact path="/virtualized" component={Virtualized} />
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById('app')
)
