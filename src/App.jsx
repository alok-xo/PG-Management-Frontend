import { useState } from 'react'
import './App.css'
import { UserLogin } from '../src/pages/Auth/userLogin.jsx'
import { UserRegistration } from '../src/pages/Auth/userRegistration.jsx'

function App() {

  return (
    <>
        <UserLogin />

        <UserRegistration />
    </>
  )
}

export default App
