import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero1 from './components/sfHerodemo'
// import  {ShadButtonPrimary} from "../src/components/ShadButtonPrimary/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero1/>
    </>
  )
}

export default App
