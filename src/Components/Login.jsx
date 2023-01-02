import React from 'react'
import addAvatar from '../img/addAvatar.png'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'>SimpleChat</span>
            <span className='Title'>Accedi</span>
            <form className='registerForm'>
              <input type="email" placeholder='Email'></input>
              <input type="password" placeholder='Password'></input>
              <button>Accedi</button>
              </form>
              <p>Primo volta qui? Registrati</p>
        </div>
    </div>
  )
}

export default Login;
