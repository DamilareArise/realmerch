import Login from "./auth/Login"
import {  Route, Routes, Navigate } from 'react-router-dom';
import SignUp from "./auth/SignUp";


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default App
