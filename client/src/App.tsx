import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Login } from './Component/Login/Login'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { ListProvider } from './Component/Data/Context'
import { TripDetail } from './Component/TripDetail/TripDetail'
import { Home } from './Component/Home/Home'
function App() {
  
  return (
    <>
    {/* <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </Router> */}

        <ListProvider>
        <Home></Home>
        </ListProvider>
      
     </>
  )

  }
export default App
