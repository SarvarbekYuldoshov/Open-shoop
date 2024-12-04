import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header/Header'
import Layout from './Components/Layout/Layout'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
         <Layout/>
         {/* <Header/>
         <Navbar/> */}
      </div>
    </>
  )
}

export default App
