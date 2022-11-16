import React from 'react'
import constants from '../../../Constant/constants'
const {NAV_MENU_ITEMS,NAV_LINK}= constants;
const Navigation = () => {
  return (
    <div className='hidden md:flex'>
        {NAV_MENU_ITEMS.map(({name,to})=>(<NAV_LINK key={name+to} to={to}>{name}</NAV_LINK>))}
    </div>
  )
}

export default Navigation