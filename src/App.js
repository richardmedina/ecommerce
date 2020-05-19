import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'
import HomePage from 'pages/homepage/homepage.component'
import ShopPage from 'pages/shoppage/shoppage.component'
import SignInAndSignUp from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from 'pages/checkout/checkout.component'

import Header from 'components/header/header.component'

import { setCurrentUser, checkUserSession } from './redux/user/user.actions'

import { selectCollectionsForPreview } from 'redux/shop/shop.selectors'

class App extends React.Component {
  //unsubscribeFromAuth = null;

  componentDidMount() {

    const { checkUserSession } = this.props

    checkUserSession()
    // const { setCurrentUser, collectionsArray } = this.props

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => { 
    //       console.log("Logged in as ", snapshot.data());
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         }
    //       })
    //     })
    //   }
    //   else {
    //     console.log("User logout")
    //     setCurrentUser(userAuth)
    //   }
    // })
    // Utility for adding collections to firestore
    // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items})))
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth()
  // }

  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() =>
              this.props.currentUser
                ? <Redirect to="/"/>
                : <SignInAndSignUp />} />
            {/* <Route exact path='/topics/:topicId' render={TopicDetails} /> */}
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  collectionsArray: selectCollectionsForPreview(state)
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
