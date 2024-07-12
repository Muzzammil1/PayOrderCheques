import { useState } from 'react'
import Formpay from './pages/Formpay'
import Chalan from './pages/Chalan'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Formpay />} />
      <Route path='/chalan' element={<Chalan />} />
      <Route path='/signIN' element={<SignIn/>} />
      <Route path='/signUp' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
