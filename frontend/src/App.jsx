import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './pages/login'
import Budgets from './pages/budgets'
import Dashboard from './pages/dashboard'
import Reports from './pages/reports'
import Transactions from './pages/transactions'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path ="/login" element={<Login/>}/>
    <Route path ="/budgets" element={<Budgets/>}/>
    <Route path ="/dashboard" element={<Dashboard/>}/>
    <Route path ="/reports" element={<Reports/>}/>
    <Route path ="/transactions" element={<Transactions/>}/>
    
  </Routes>
  </BrowserRouter>
  )
}

export default App