import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Tweets from './components/Tweets';
import About from './components/About';
import GoogleMap from './components/GoogleMap';

export default (
  <Route>

    <Route path="/" component={App} >
      <IndexRoute component={Tweets} />
      <Route path='tweets' component={Tweets} />
      <Route path='about' component={About} />
      <Route path='google_map' component={GoogleMap} />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
