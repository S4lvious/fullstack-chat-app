import React from 'react'
import addAvatar from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase.js';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';




const Register = () => {

    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    };
  

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'>SimpleChat</span>
            <span className='Title'>Registrati</span>
            <form className='registerForm' onSubmit={handleSubmit}>
              <input type="text" placeholder='Username'></input>
              <input type="email" placeholder='Email'></input>
              <input type="password" placeholder='Password'></input>
              <input type="file" style={{display:"none"}} id="addAvatar"></input>
              <label htmlFor='addAvatar' style={{cursor:"pointer"}}>
              <img src={addAvatar}></img>
              <span>Aggiungi un avatar</span>
              </label>
              <button disabled={loading}>Registrati</button>
              {loading && "Uploading and compressing the image please wait..."}
              {err && <span>Qualcosa ?? andato storto...</span>}
              </form>
              <p>Hai gi?? un account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register;
