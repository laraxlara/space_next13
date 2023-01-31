import React from 'react'

import '../styles/menu.css'

const Menu = () => {
  return (
    <div className='menu'>
      <img src='/earth.png' alt='moon' width={120} />
        <p>&#8594; Home</p>
        <p>&#8594; About</p>
        <p>&#8594; Contact</p>
    </div>
  )
}

export default Menu