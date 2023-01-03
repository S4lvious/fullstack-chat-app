import React from 'react'
import Sidebar from '../Elements/Sidebar'
import Chat from '../Elements/Chat'

function Home() {
  return (
    <div className='Home'>
    <div className='chatContainer'>
      <Sidebar />
      <Chat />
    </div>
    </div>
  )
}

export default Home
