import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from 'redux/user/user.selectors'
import { selectCartHidden } from 'redux/cart/cart.selectors'

import CartIcon from 'components/cart-icon/cart-icon.component'
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from 'assets/crown.svg'

import { signOutStart } from 'redux/user/user.actions'

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles'

import './header.styles.scss'

const Header = ({ currentUser, hidden, signOutStart }) => (
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
                    ? <OptionDiv as='div' onClick={ () => signOutStart() }>SIGN OUT</OptionDiv>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})



export default connect(mapStateToProps, mapDispatchToProps)(Header)
