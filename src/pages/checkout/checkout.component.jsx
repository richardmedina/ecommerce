import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors'

import CheckoutItem from 'components/checkout-item/checkout-item.component'
import StripeButton from 'components/stripe-button/stripe-button.component'

import './checkout.styles.scss'

const HeaderBlock = ({ item }) => (
    <div className='header-block'>
        <span>{item}</span>
    </div>
)

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {
                ['Product', 'Description', 'Quantity', 'Price', 'Remove']
                    .map(item =>
                        <HeaderBlock key={item} item={item} />
                    )
            }
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>Total {total}</div>
        <div className='test-warning'>
            Please use the following test credit card for *payments
            <br />
            4242 4242 4242 4242  - Exp 01/21 - CVV: 123

        </div>
        <StripeButton price={total} />
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect (mapStateToProps) (CheckoutPage)
