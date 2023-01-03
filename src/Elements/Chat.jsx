import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from "./Input"

function Chat() {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Jamal</span>
        <div className="chaticons">
          <img src={Cam} alt="cam"></img>
          <img src={Add} alt="add"></img>
          <img src={More} alt="more"></img>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
