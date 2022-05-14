import React from 'react'

const Burger = ({className, openMenu, open}) => {
  return (
    <div className={className} onClick={openMenu} open={open}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Burger;