import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'

function App() {
  const data  = useLoaderData()
  console.log(data)
  return (
    <>
      <h1 className='text-5xl text-purple-700'>Tottal data : {data.length}</h1>

    </>
  )
}

export default App
