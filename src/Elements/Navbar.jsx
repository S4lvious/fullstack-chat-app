import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

function Navbar() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='Navbar'>
      <span className="logo">SimpleChat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt='propic'></img>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Esci</button>
        
      </div>
    </div>
  )
}

export default Navbar
