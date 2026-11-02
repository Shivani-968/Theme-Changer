import { useState } from 'react'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 
  return (
    <>
    <UserContextProvider>
      <ThemeButton/>
        <Card/>
    </UserContextProvider>
     
    </>
  )
}

export default App
