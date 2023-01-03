import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
      <span className="logo">SimpleChat</span>
      <div className="user">
        <img src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' alt='propic'></img>
        <span>Salvatore</span>
        <button>Esci</button>
        
      </div>
    </div>
  )
}

export default Navbar
