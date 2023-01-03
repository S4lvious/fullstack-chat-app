import React from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'


function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Scrivi qualcosa...'></input>
      <div className='send'>
        <img src={Attach} alt=""></img>
        <input type='file' style={{display:"none"}} id="file"></input>
        <label htmlFor='file'>
          <img src={Img} alt=''></img>
        </label>
        <button>Invia</button>
      </div>
    </div>
  )
}

export default Input
