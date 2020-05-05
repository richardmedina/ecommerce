import React from 'react'
import { connect } from 'react-redux'

import { addItem } from 'redux/cart/cart.actions'

import CustomButton from 'components/custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({ addItem, item }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton className='custom-button' onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)