import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import './App.css'
import HomePage from 'pages/homepage/homepage.component'

const TempHome = props => (
  <div>
    <Link to="/topics">Topics</Link>
    <button onClick={ () => props.history.push('/topics')}>Another Topics</button>
    <h1>HOME PAGE</h1>
  </div>
)

const HatPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


const TopicsList = () => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
  </div>
)

const TopicDetails = props => (
  <div>
    <h1>TOPIC DETAILS PAGE: {props.match.params.topicId}</h1>
  </div>
)

function App() {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HatPage} />
          {/* <Route exact path='/topics/:topicId' render={TopicDetails} /> */}
        </Switch>
      </div>
  );
}

export default App;
