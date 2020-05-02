const INITIAL_STATE = {
  sections:[
    {
      id: 1,
      title: 'hats',
      subtitle: 'shop now',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'shop/hats'
    },
    {
      id: 2,
      title: 'jackets',
      subtitle: 'shop now',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'shop/jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      subtitle: 'shop now',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'shop/sneekers'
    },
    {
      id: 4,
      title: 'womens',
      subtitle: 'shop now',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      linkUrl: 'shop/womens',
      size: 'large'
    },
    {
      id: 5,
      title: 'mens',
      subtitle: 'shop now',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      linkUrl: 'shop/mens',
      size: 'large'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      default:
        return state
  }
}

export default directoryReducer