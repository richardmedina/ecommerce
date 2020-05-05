import React from 'react'
import { auth } from 'firebase/firebase.utils'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from 'redux/user/user.selectors'
import { selectCartHidden } from 'redux/cart/cart.selectors'

import CartIcon from 'components/cart-icon/cart-icon.component'
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from 'assets/crown.svg'

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser
                    ? <OptionDiv as='div' onClick={ () => auth.signOut() }>SIGN OUT</OptionDiv>
                    : <OptionLink as={Link} to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
