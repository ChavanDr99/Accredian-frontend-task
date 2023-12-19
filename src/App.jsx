import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Dummypage from './Components/Dummypage';
import  { Toaster } from 'react-hot-toast';
const App = () => {
  return (
  
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Dummy' element={<Dummypage/>} />
</Routes>
</BrowserRouter>
<Toaster />
</>
  )
}

export default App
