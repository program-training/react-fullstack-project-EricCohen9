import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListProvider } from './Component/Data/Context'
import { Home } from './Component/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ListProvider>
        <Home></Home>
        </ListProvider>
      </div>
      
    </>
  )
}

export default App
