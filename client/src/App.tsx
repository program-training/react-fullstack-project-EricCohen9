import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Login } from './Component/Login/Login'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { ListProvider } from './Component/Data/Context'
import { TripDetail } from './Component/TripDetail/TripDetail'
import { Home } from './Component/Home/Home'
import { RoutsProvider } from './Component/RouterContext/RouterContext' 
import { RouterMain } from './Component/Router/Router'
import { TokenProvider } from './Component/Token/Token'
function App() {
  
  return (
    <>
    {/* <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </Router> */}
      <TokenProvider>
        <RoutsProvider> 
         <ListProvider>
        <RouterMain></RouterMain>
        </ListProvider>
        </RoutsProvider>
        </TokenProvider>
      
     </>
  )

  }
export default App
