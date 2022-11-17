import React from 'react'
import Logo from './Nav-Left/Logo'
import Navigation from './Nav-Middle/Navigation'
import NavUserControl from './Nav-Right/NavUserControl'

const Header = () => {
  return (
    <header className='flex items-center p-5 sticky top-0 bg-[#FBFBFE] shadow h-14 w-full justify-between mb-2 z-10'>
        <Logo/>
        <Navigation/>
        <NavUserControl/>
    </header>
  )
}

export default Header