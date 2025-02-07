import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import PandoraCares from '../pages/home/addSection/pandoraCares/PandoraCares'
import AboutPandora from '../pages/home/addSection/aboutPandora/AboutPandora'
import TermsCon from '../pages/home/addSection/termsCon/TermsCon'
import CookiePolicy from '../pages/home/addSection/cookiePolicy/CookiePolicy'
import PrivacyPolicy from '../pages/home/addSection/privacyPolicy/PrivacyPolicy'
import BasketSection from '../pages/home/addSection/basketSection/BasketSection'
import WishlistSection from '../pages/home/addSection/aboutPandora/wishlistSection/WishlistSection'

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
            <Route path='/basket' element={<BasketSection/>} />
            <Route path='/wishlist' element={<WishlistSection/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router