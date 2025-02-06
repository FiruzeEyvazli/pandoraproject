import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import PandoraCares from '../pages/home/addSection/pandoraCares/PandoraCares'
import AboutPandora from '../pages/home/addSection/aboutPandora/AboutPandora'
import TermsCon from '../pages/home/addSection/termsCon/TermsCon'
import CookiePolicy from '../pages/home/addSection/cookiePolicy/CookiePolicy'
import PrivacyPolicy from '../pages/home/addSection/privacyPolicy/PrivacyPolicy'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cares' element={<PandoraCares/>} />
            <Route path='/about' element={<AboutPandora/>} />
            <Route path='/termscon' element={<TermsCon/>} />
            <Route path='/cookie' element={<CookiePolicy/>} />
            <Route path='/privacy' element={<PrivacyPolicy/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router