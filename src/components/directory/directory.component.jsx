import React from 'react'
import MenuItem from 'components/menu-item/menu-item.component'

import './directory.styles.scss'

//const constSections = 


class Directory extends React.Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'hats',
                subtitle: 'shop now',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl: 'hats'
            },
            {
                id: 2,
                title: 'jackets',
                subtitle: 'shop now',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                linkUrl: 'jackets'
            },
            {
                id: 3,
                title: 'sneakers',
                subtitle: 'shop now',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                linkUrl: 'sneekers'
            },
            {
                id: 4,
                title: 'womens',
                subtitle: 'shop now',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                linkUrl: 'womens',
                size: 'large'
            },
            {
                id: 5,
                title: 'mens',
                subtitle: 'shop now',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                linkUrl: 'mens',
                size: 'large'
            }
        ]
    }
    
    render () {
        const { sections } = this.state
        return (
            <div className='directory-menu'>
                { sections.map(({id, ...otherSectionProps}) => 
                    <MenuItem
                        key={ id }
                        {...otherSectionProps}
                        />
                    ) }
            </div>
        )
    }
    
}

export default Directory
