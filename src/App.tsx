import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HeroTest} from '@/components/sfHerodemo/index'
// import  {ShadButtonPrimary} from "../src/components/ShadButtonPrimary/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroTest/>
    </>
  )
}

export default App
