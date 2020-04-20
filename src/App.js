import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import './App.css'
import HomePage from 'pages/homepage/homepage.component'
import ShopPage from 'pages/shoppage/shoppage.component'
import SignInAndSignUp from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from 'components/header/header.component'

import { auth } from 'firebase/firebase.utils'

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log (user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const  { currentUser } = this.state
    return (
        <div>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />
            {/* <Route exact path='/topics/:topicId' render={TopicDetails} /> */}
          </Switch>
        </div>
    );
  }
}

export default App;
