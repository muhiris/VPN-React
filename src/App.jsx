import React from 'react'
import Splash from './screens/Splash'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from './screens/Step1';
import Step2 from './screens/Step2';
import Step3 from './screens/Step3';
import Signup from './screens/Signup';
import Qr from './screens/Qr';
import Home from './screens/Home';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/board1" element={<Step1 />} />
      <Route path="/board2" element={<Step2 />} />
      <Route path="/board3" element={<Step3 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/qr" element={<Qr />} />
      <Route path="/home" element={<Home />} />
      
      </Routes>
    </BrowserRouter>
  )
}
