import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'>SimpleChat</span>
            <span className='Title'>Accedi</span>
            <form className='registerForm' onSubmit={handleSubmit}>
              <input type="email" placeholder='Email'></input>
              <input type="password" placeholder='Password'></input>
              <button>Accedi</button>
              </form>
              <p>Primo volta qui? <Link to="/register">Registrati</Link></p>
        </div>
    </div>
  )
}

export default Login;
