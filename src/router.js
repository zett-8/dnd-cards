import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorBoundary from './hocs/errorBoundary'
import Page404 from './components/404'

import LandingContainer from './containers/landing'
import VerticalListContainer from './containers/vertical'

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/vertical" component={VerticalListContainer} />
          <Route component={Page404} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </ErrorBoundary>
)
