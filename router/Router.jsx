import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
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
import PrivateRoute from '../pages/home/addSection/privateRouter/PrivateRoute'
import PaymentPage from '../pages/home/addSection/payment/PaymentPage';
import Succes from '../pages/home/addSection/payment/succes/Succes';

import DetailPage from '../pages/home/addSection/detailPage/DetailPage'
import NotFound from '../pages/home/notFound/NotFound';



// const stripePromise = loadStripe("pk_test_51QuzeY4Q6NZiWKpIOcdzFHN9LcJAbQqC1CthxYvBYeHpIT0IDJQStusR2BspKzM6H1U9Spp697aM0aRUuVyoVI7D00fPG56T5u");

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
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/login' element={<LoginSection />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/payment-success' element={<Succes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router