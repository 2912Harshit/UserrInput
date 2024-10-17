import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'
import { PersonalDetails } from './components/PersonalDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        {/* <InputField/> */}
        <PersonalDetails/>
      </div>
      
    
  )
}

export default App
