import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import './App.css'
import HomePage from 'pages/homepage/homepage.component'
import ShopPage from 'pages/shoppage/shoppage.component'

function App() {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          {/* <Route exact path='/topics/:topicId' render={TopicDetails} /> */}
        </Switch>
      </div>
  );
}

export default App;
