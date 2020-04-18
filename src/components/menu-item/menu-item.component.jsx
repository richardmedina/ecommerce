import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

export const MenuItem = ({ title, subtitle, imageUrl, size, linkUrl, history, match}) => (
    <div className={`menu-item ${size}`}>
        <div
            onClick={ () => history.push(`${match.url}${linkUrl}`) }
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subtitle}</span>
        </div>
    </div>
)

export default withRouter(MenuItem)
