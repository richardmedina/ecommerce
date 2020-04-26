import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors'

import CheckoutItem from 'components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const HeaderBlock = ({ item }) => (
    <div className='header-block'>
        <span>{item}</span>
    </div>
)

const CheckoutPage = ({ cartItems, cartTotal }) => (
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
        <div className='total'>
            <span>Total {cartTotal}</span>
        </div>
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect (mapStateToProps) (CheckoutPage)
