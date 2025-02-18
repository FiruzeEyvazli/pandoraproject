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
import AdminPanel from '../pages/home/addSection/adminPanel/AdminPanel'
import CharmsSection from '../pages/home/addSection/charmsSection/CharmsSection'
import BraceletSection from '../pages/home/addSection/braceletSection/BraceletSection'
import RingsSection from '../pages/home/addSection/ringsSection/RingsSection'
import NecklacesSection from '../pages/home/addSection/necklacesSection/NecklacesSection'
import CollectionsSection from '../pages/home/addSection/collectionsSection/CollectionsSection'
import LoginSection from '../pages/home/addSection/login/LoginSection'
import Profile from '../pages/home/addSection/profile/Profile'
import RegisterContent from '../pages/home/addSection/register/RegisterContent'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cares' element={<PandoraCares />} />
          <Route path='/about' element={<AboutPandora />} />
          <Route path='/termscon' element={<TermsCon />} />
          <Route path='/cookie' element={<CookiePolicy />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/basket' element={<BasketSection />} />
          <Route path='/wishlist' element={<WishlistSection />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='/charms' element={<CharmsSection />} />
          <Route path='/bracelet' element={<BraceletSection />} />
          <Route path='/rings' element={<RingsSection />} />
          <Route path='/necklaces' element={<NecklacesSection />} />
          <Route path='/collection' element={<CollectionsSection />} />
          <Route path='/register' element={<RegisterContent />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<LoginSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router