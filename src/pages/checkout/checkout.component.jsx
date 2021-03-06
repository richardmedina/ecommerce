import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors'

import CheckoutItem from 'components/checkout-item/checkout-item.component'
import StripeButton from 'components/stripe-button/stripe-button.component'

import {
    CheckoutPageContainer,
    CheckoutHeader,
    Total,
    TestWarning
} from './checkout.styles'

const HeaderBlock = ({ item }) => (
    <div className='header-block'>
        <span>{item}</span>
    </div>
)

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            {
                ['Product', 'Description', 'Quantity', 'Price', 'Remove']
                    .map(item => <HeaderBlock key={item} item={item} />)
            }
        </CheckoutHeader>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <Total>Total {total}</Total>
        <TestWarning>
            Please use the following test credit card for *payments
            <br />
            4242 4242 4242 4242  - Exp 01/21 - CVV: 123
        </TestWarning>
        <StripeButton price={total} />
    </CheckoutPageContainer>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect (mapStateToProps) (CheckoutPage)
