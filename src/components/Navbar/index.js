import React, { useState } from 'react'
import {BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'


const defaultIconsSize = '1.875rem'

const items = [
  {
    lable: 'Home',
    icon: <BiHomeAlt size = {defaultIconsSize}/>,
    active: true
  },
  {
    lable: 'Movies',
    icon: <BiMoviePlay size = {defaultIconsSize}/>,
  },
  {
    lable: 'About',
    icon: <BiInfoCircle size = {defaultIconsSize}/>,
  }
]

export const Navbar = () => {
  
  const [isNavMenuOpen, setIsNavMenuMobieOpen] = useState(false);

  return (
    <div className='col-span-1 bg-cyan-500'>
        <div className='flex justify-between items-center mx-4 md:block'>
            <h4 className='uppercase font-bold text-primary border-b border-primary py-4 text-right'>phimmoi.net</h4>
        <BiMenu className='cursor-pointer md:hidden' 
          size={defaultIconsSize} 
          onClick = {() => 
            {setIsNavMenuMobieOpen(!isNavMenuOpen)}
            }/>
        </div>

        <ul className={`mx-4 my-2 md:block ${isNavMenuOpen ? '': 'hidden'} `}>
          {
            items.map(
              (item, index) => 
              {
                const {lable, icon, active} = item;
                return (
                  <li key = {index}   className = {`p-2 flex items-center justify-end cursor-pointer ${ active ? 'text-white bg-primary': ''}`}>
                    <h3 className='mr-2'>{lable}</h3>
                    {icon}
                  </li>)
              }
            )
          }
        </ul>
    </div>
  ) 
}
