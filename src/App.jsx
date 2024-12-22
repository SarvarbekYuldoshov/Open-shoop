import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header/Header'
import Layout from './Components/Layout/Layout'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import CellPhone from './Components/CellPhone/CellPhone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
         <Layout/>
         <Header/>
         <Navbar/>
         {/* <Hero/>
         <CellPhone/> */}
      </div>
    </>
  )
}

export default App
