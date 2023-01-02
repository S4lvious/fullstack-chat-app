import React from 'react'
import addAvatar from '../img/addAvatar.png'

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'>SimpleChat</span>
            <span className='Title'>Registrati</span>
            <form className='registerForm'>
              <input type="text" placeholder='Username'></input>
              <input type="email" placeholder='Email'></input>
              <input type="password" placeholder='Password'></input>
              <input type="file" style={{display:"none"}} id="addAvatar"></input>
              <label htmlFor='addAvatar' style={{cursor:"pointer"}}>
              <img src={addAvatar}></img>
              <span>Aggiungi un avatar</span>
              </label>
              <button>Registrati</button>
              </form>
              <p>Hai già un account? Login</p>
        </div>
    </div>
  )
}

export default Register;
